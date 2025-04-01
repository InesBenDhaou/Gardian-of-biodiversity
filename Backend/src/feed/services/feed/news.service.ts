import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {NewsEntity} from '../../models/News/News.entity';
import {InterfaceNews} from '../../models/News/News.interface';

@Injectable()
export class NewsService {
    constructor (
        @InjectRepository(NewsEntity)
        private readonly newsRepository : Repository<NewsEntity>
    ){}

    

    createNews (interfaceNews : InterfaceNews) : Observable<InterfaceNews> {
        return from(this.newsRepository.save(interfaceNews));
    }

    async findAllNews(): Promise<InterfaceNews[]> {
        const news = await this.newsRepository.find();

        return news.map(newss => {
            return {
                description: newss.description,
                title: newss.title as string,
                image: newss.image as string,
                type : newss.type as string ,
                id: newss.id,
                imageHex: null
            } as InterfaceNews
        }
        )
    }
    updateNews (id:number , interfaceNews : InterfaceNews): Observable<UpdateResult> {
        return from(this.newsRepository.update(id,interfaceNews));

    }

    deleteNews (id:number) : Observable<DeleteResult>{
        return from(this.newsRepository.delete(id));
    }
}