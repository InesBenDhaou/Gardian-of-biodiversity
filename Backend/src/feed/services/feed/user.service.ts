import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {UserEntity} from '../../models/user/user.entity';
import {InterfaceUser} from '../../models/User/User.interface';
import { map } from 'rxjs/operators';

export class UserService {
    constructor (
        @InjectRepository(UserEntity)
        private readonly userRepository : Repository<UserEntity>
    ){}

    
   

    createUser (interfaceUser : InterfaceUser) : Observable<InterfaceUser> {
        return from(this.userRepository.save(interfaceUser));
    }

    async findAllUsers(): Promise<InterfaceUser[]> {
        const Users = await this.userRepository.find();

        return Users.map(User => {
            return {
                name: User.name,
                email: User.email as string,
                password: User.password as string,
                id: User.id,
            } as InterfaceUser
        }
        )
    }

    async findUser(condition: FindOneOptions<InterfaceUser> ): Promise<InterfaceUser> {
        return this.userRepository.findOne(condition);
    }

    updateUser (id:number , interfaceUser : InterfaceUser): Observable<UpdateResult> {
        return from(this.userRepository.update(id,interfaceUser));

    }

    deleteUser (id:number) : Observable<DeleteResult>{
        return from(this.userRepository.delete(id));
    }
}