import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmServiceService } from '../Services/film-service.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  film : Film ;
  valId : string ;
  modalstyle :string  ;
  listFilms: Film[];
  name :string ;
  
  

  constructor(private sp: FilmServiceService,private ar : ActivatedRoute,private router: Router) {
    this.modalstyle = 'block';
    this.film = new Film();

    

   }

   ngOnInit() {
    this.sp.getFilms().subscribe((data:Film[])=>{this.listFilms =data});

    this.ar.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));
  }
  close(){
    
   this.router.navigate(['/']);
  
  }

}
