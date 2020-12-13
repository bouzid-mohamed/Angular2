import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  moviesUrl : string = "http://localhost:3000/films";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }





  constructor(private _http: HttpClient) {
    
   }

  film : Film[] ;
  getFilms(): Observable<Film[]>{
    return this._http.get<Film[]>(this.moviesUrl);
  }
  addFilm(film: Film): Observable<Film> {
    return this._http.post<Film>(this.moviesUrl, film, this.httpOptions);}


    deleteFilm (f: Film | number): Observable<Film> {

      const id = typeof f === 'number' ? f : f.id;
      const url=this.moviesUrl+'/'+id;
      return this._http.delete<Film>(url);
      }
      updateMovie (id: number, movie: Film): Observable<Film> {
     return this._http.put<Film>(this.moviesUrl+'/'+ id, movie, this.httpOptions);}

     getmovies(id: number): Observable<Film> {
          return this._http.get<Film>(this.moviesUrl +'/'+ id);  }
    
}

