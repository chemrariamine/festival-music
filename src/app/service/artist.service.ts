import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artist, ARTISTS, Concert, CONCERTS } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  getArtists():Observable<Artist[]>{return of(ARTISTS);}
  getArtist(id:string):Observable<Artist | undefined>{return of(ARTISTS.find(a=>a.id===id));}
  getConcertsByArtist(artisId:string):Observable<Concert[]>{
        return of(CONCERTS.filter(c => c.artistId === artisId));
  }
  getConcert(id:string):Observable<Concert | undefined>{return of(CONCERTS.find(c=>c.id.toString()===id));}

  constructor() { }
}
