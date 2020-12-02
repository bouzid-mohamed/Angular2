import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  film : Film =new Film();
  valId : string ;
  
  

  constructor(private ar : ActivatedRoute) {
 

   }

  ngOnInit(): void {
   this.film.description = "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. " ;
   this.film.title ="Avengers: Infinity War" ;
  this.film.image="1.jpg" ;
  this.film.note=8.8 ;
  this.film.nbr = 100 ;
  this.film.video="ffff" ;
  this.film.id=1 ;
  this.film.duree = 2 ;
  this.ar.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));

  }

}
