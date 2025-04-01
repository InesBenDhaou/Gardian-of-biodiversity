import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult,MoreThan, LessThan } from 'typeorm';
import {from , Observable } from 'rxjs';
import {EventEntity} from '../../models/event/event.entity';
import {EventInterface} from '../../models/event/event.interface';

export class EventService {
    constructor (
        @InjectRepository(EventEntity)
        private readonly eventRepository : Repository<EventEntity>
    ){}

    

    createEvent (eventInterface : EventEntity) : Observable<EventEntity> {
        return from(this.eventRepository.save(eventInterface));
    }

    async findAllEvents(): Promise< EventInterface[]> {
        const events = await this.eventRepository.find();

        return events.map(event => {
            return {
                id:event.id,
                title:event.title,
                date: event.date.toISOString().split('T')[0],
                place:event.place,
                projet:event.projet,
                content:event.content,
                imageHex: null
            } as EventInterface
        }
        )
    }
    async findForthcomingEvents(): Promise<EventInterface[]> {
        const currentDate = new Date();
        const forthcomingEvents = await this.eventRepository.find({
            where: {
                date: MoreThan(currentDate)
            }
        });

        return forthcomingEvents.map(event => ({
            id: event.id,
            title: event.title,
            date: event.date.toISOString().split('T')[0],
            place: event.place,
            projet: event.projet,
            content: event.content,
            image:event.image,
            imageHex: null
        }));
    }
    async findAchievements(): Promise<EventInterface[]> {
        const currentDate = new Date();
        const achievements = await this.eventRepository.find({
            where: {
                date: LessThan(currentDate)
            }
        });

        return achievements.map(event => ({
            id: event.id,
            title: event.title,
            date: event.date.toISOString().split('T')[0],
            image:event.image,
            place: event.place,
            projet: event.projet,
            content: event.content,
            imageHex: null
        }));
    }
    
    updateEvent (id:number , eventInterface : EventEntity): Observable<UpdateResult> {
        return from(this.eventRepository.update(id,eventInterface));

    }

    deleteEvent (id:number) : Observable<DeleteResult>{
        return from(this.eventRepository.delete(id));
    }
}