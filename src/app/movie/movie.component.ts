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
  film : Film =new Film();
  valId : string ;
  modalstyle :string  ;
  listFilms : Film[] ;
  name :string ;
  
  

  constructor(private ar : ActivatedRoute,private router: Router,private sp: FilmServiceService) {
    this.modalstyle = 'block';
    

   }

  ngOnInit(): void {
   
  this.ar.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));
  this.listFilms = this.sp.getFilms() ;
  for (let e of this.listFilms) {
    if(e.id==parseInt(this.valId))
    this.name = e.full ;
    console.log(this.name);
     
  }

  }
  close(){
    
   this.router.navigate(['/']);
  
  }

}
