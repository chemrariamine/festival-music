import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Concert, CONCERTS } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  private _concerts=new BehaviorSubject<Concert[]>(CONCERTS.map(c=>({...c})));
  concerts$ =this._concerts.asObservable();
  getConcerts():Observable<Concert[]>{return this.concerts$;}
  getConcert(id:string):Concert | undefined{return this._concerts.getValue().find(c=>c.id.toString()===id);}

  reserve(concertId:string, places:number): boolean {
    const list = this._concerts.getValue().map(c => ({...c}));
    const idx = list.findIndex(c => c.id.toString() === concertId);
    if (idx === -1) return false;
    const c = list[idx];
    if (c.reservations + places > c.capacity) return false;
    c.reservations += places;
    list[idx] = c;
    this._concerts.next(list);
    return true;
  }
  constructor() { }
}
