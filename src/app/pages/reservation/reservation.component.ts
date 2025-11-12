import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../../service/concert.service';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {
  concertId!: string;
  concert: any;
  message = '';

  constructor(private route: ActivatedRoute, private concertSvc: ConcertService, private router: Router) {}

  ngOnInit() {
    this.concertId = this.route.snapshot.paramMap.get('id')!;
    this.concert = this.concertSvc.getConcert(this.concertId);
  }

  onSubmit(form: any) {
    const places = +form.value.places;
    if (!this.concert) { this.message = 'Concert introuvable'; return; }
    const ok = this.concertSvc.reserve(this.concertId, places);
    if (ok) {
      this.message = 'Réservation confirmée';
      this.concert = this.concertSvc.getConcert(this.concertId);
    } else {
      this.message = 'Impossible : places insuffisantes';
    }
  }

}
