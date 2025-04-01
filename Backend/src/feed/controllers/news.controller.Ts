
import { NewsService } from '../services/feed/news.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceNews} from '../models/news/news.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewsEntity } from '../models/News/News.entity';

@Controller('news')
export class NewsController {
    constructor ( private newsService: NewsService ){
    }
    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfaceNews
    ) {
      const news = new NewsEntity();
      news.title = body.title;
      news.description = body.description;
      news.type =  body.type ;
      news.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.newsService.createNews(news);
    }

    @Get()
    async findAll() : Promise<InterfaceNews[]> {
        return await this.newsService.findAllNews();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfaceNews
    ) {
      const news = new NewsEntity();
      news.title = body.title;
      news.description = body.description;
      news.type =  body.type ;
      news.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.newsService.updateNews(id , news);
    }
 

    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.newsService.deleteNews(id);
    }

   
}
