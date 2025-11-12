import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Concert } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda = new BehaviorSubject<Concert[]>([]);
  agenda$ = this.agenda.asObservable();

  add(c: Concert) {
    const cur = this.agenda.getValue();
    if (!cur.find(x => x.id === c.id)) {
      this.agenda.next([...cur, c]);
    }
  }
  remove(id: string) {
    this.agenda.next(this.agenda.getValue().filter(x => x.id.toString() !== id));
  }
  getAll() { 
    return this.agenda.getValue(); }

  
  constructor() { }
}
