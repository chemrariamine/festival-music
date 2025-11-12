import { Component, OnInit } from '@angular/core';
import { Artist, Concert } from '../../interface';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../service/artist.service';
import { ConcertService } from '../../service/concert.service';

@Component({
  selector: 'app-artist-detail',
  standalone: false,
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.scss'
})
export class ArtistDetailComponent implements OnInit {
  artist:any;
  concerts:Concert[]=[];
  agenda:Concert[]=[];
  constructor(private route:ActivatedRoute, private artistS:ArtistService, private concertS:ConcertService){}
  ngOnInit() {
   
   this.artist = { name: 'Nom Artiste', bio: 'Biographie...' };
    this.concerts = [
      { 
        id: 1, 
        title: 'Concert 1', 
        date: new Date().toISOString(), // date en string ISO
        venue: 'Salle A', 
        artistId: 'artist-1', 
        reservations: 60,
        capacity: 100
      },
      { 
        id: 2, 
        title: 'Concert 2', 
        date: new Date().toISOString(), 
        venue: 'Salle B', 
        artistId: 'artist-1', 
        reservations: 20,
        capacity: 80
      }
    ];
  }
  addToAgenda(concert: Concert) {
    console.log('Ajouté à l’agenda :', concert);
  }

}
