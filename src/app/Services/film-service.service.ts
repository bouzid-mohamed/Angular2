import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  moviesUrl : string = "http://localhost:3000/films"; ; 
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }





  constructor(private _http: HttpClient) {
    
   }

  film : Film[] /*= [
    {id: 1, title: "Avengers: Infinity War", duree: 18, image: '1.jpg',nbr:3,description:'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 2, title: "Deadpool 2", duree: 18, image: '2.jpg',nbr:3,description:'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy s life.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 3, title: "Black Panther", duree: 18, image: '3.jpg',nbr:3,description:'King T Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country s new leader. However, T Challa soon finds that he is challenged for the throne by factions within his own country as well as without.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 4, title: "Fifty Shades Freed", duree: 18, image: '4.jpg',nbr:3,description:'A young Silicon Valley tech-titan enlists a veteran surgeon with a controversial past in starting a hospital with a cutting-edge, new school approach to medicine.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 5, title: "Red Sparrow", duree: 18, image: '5.jpg',nbr:3,description:'Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 6, title: "Rampage", duree: 18, image: '6.jpg',nbr:3,description:'Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth. But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 7, title: "Ready Player One", duree: 18, image: '7.jpg',nbr:3,description:'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',video:'1.mp4',note:3,full:"f.mp4",etat:0},
    {id: 8, title: "Game Night", duree: 18, image: '8.jpg',nbr:3,description:'Max and Annie s weekly game night gets kicked up a notch when Max s brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. ',video:'1.mp4',note:3,full:"f.mp4",etat:0},
  ]*/


  getFilms(): Observable<Film[]>{
   return this._http.get<Film[]>(this.moviesUrl);
  }
  
}
