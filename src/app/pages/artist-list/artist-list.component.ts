import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interface';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-artist-list',
  standalone: false,
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent implements OnInit {
  artists:Artist[]=[];
  constructor(private AS: ArtistService){}
  ngOnInit() {
    this.AS.getArtists().subscribe(a=> this.artists=a);
      
  }


}
