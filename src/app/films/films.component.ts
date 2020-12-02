import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
import { Film } from '../models/film';
import { FilmServiceService } from '../Services/film-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  listFilms : Film[] ;
  etat : number = 0;
  modalstyle :string  ;
  source : string ;


  constructor(private sp: FilmServiceService) {
    this.modalstyle = 'none' ;
    this.source='1.mp4' ;
    
   

    
   

  
   }

  ngOnInit(){
 
    
    this.listFilms = this.sp.getFilms() ;
    
    
  }
  enter(i){
    this.listFilms[i].etat=1;
  }
  leave(i){
    
    this.listFilms[i].etat=0;
  }
  change(src){
    this.modalstyle = 'block' ;
    this.source = src ;
    console.log(this.source) ;
  }
  close(){
    this.modalstyle = 'none' ;
    var myVideo: any = document.getElementById("myVideo");
    myVideo.pause();
    
  
  }
  
 

}
