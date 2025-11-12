import { Component, OnInit } from '@angular/core';
import { Concert } from '../../interface';
import { AgendaService } from '../../service/agenda.service';

@Component({
  selector: 'app-agenda',
  standalone: false,
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent implements OnInit {
  agenda: Concert[] = [];
  constructor(private agendaS: AgendaService) {}
  ngOnInit() {
    this.agendaS.agenda$.subscribe(a => this.agenda = a);
  }
  remove(id: string) { this.agendaS.remove(id); }

}
