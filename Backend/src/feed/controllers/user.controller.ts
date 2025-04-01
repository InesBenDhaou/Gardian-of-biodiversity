
import { UserService } from '../services/feed/user.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceUser } from '../models/user/user.interface';
import { UserEntity } from '../models/user/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { BadRequestException, Body, Controller, Delete, Get, Param, Post ,Put ,UploadedFile, UseInterceptors,Res, Req, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
    constructor ( 
      private userService: UserService,
      private jwtService :JwtService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(
        @Body() body: InterfaceUser,
        @Res({passthrough : true}) response :Response
      ) {
        const user = new UserEntity();
        user.name = body.name;
        user.email = body.email;
        user.type = body.type
        const hash = await bcrypt.hash(body.password, 12);
        user.password = hash;
        const jwt = await this.jwtService.signAsync({id:user.id});
        response.cookie ('jwt' , jwt , {httpOnly:true});
        this.userService.createUser(user);
        return {
            message: "success",
            token: jwt,
           }

      }

    @Post('login')
    async login(
      @Body('email') email: string,
      @Body('password') password: string,
      @Res({passthrough : true}) response :Response
    ) {
      const user = await this.userService.findUser({where: { email: email }});
      if (!user) {
         throw new BadRequestException ('invalid credentials');
      }
      if (!await bcrypt.compare(password , user.password)){
        throw new BadRequestException ('invalid credentials');
      }
      const jwt = await this.jwtService.signAsync({id:user.id});
      response.cookie ('jwt' , jwt , {httpOnly:true});
      return {
         message: "success",
         token: jwt,
         type: user.type
      };
    }
  
    @Post('logout')
    async logout (
      @Res({passthrough : true}) response :Response
    ){
       response.clearCookie('jwt');
       return {
         message : 'success'
       }
    }
    
    @Get('specificUser')
    async user (@Req() request:Request) {
      try{
        const tokenUnparsed = request.headers["authorization"];
        const [bearer, token] = (tokenUnparsed as string).split(' ');
        
        const data = await this.jwtService.verifyAsync(token);
        if (!data) {
          throw new UnauthorizedException();
        }
        const user = await this.userService.findUser({where: { id: data['id'] }});
        const {password,...result} = user ;
        return result ; 
      }catch(e){
        console.log(e);
        throw new UnauthorizedException();
      }
      
    }

    @Get()
    async findAll() : Promise<InterfaceUser[]> {
        return await this.userService.findAllUsers();
    }

    

    @Put(':id')
    update(
        @Param('id') id:number ,
        @Body() interfaceUser : InterfaceUser
        ) : Observable<UpdateResult> {
        return this.userService.updateUser(id , interfaceUser);
    }
    
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.userService.deleteUser(id);
    }

   
}
