import {Input, Component, OnInit ,Output, EventEmitter } from '@angular/core';
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
  play :Number  ;
  modalstyle2 :string  ;
  @Input() data: string ;
  @Output() newItemEvent = new EventEmitter<string>();
  



  constructor(private sp: FilmServiceService) {
    this.modalstyle = 'none' ;
    this.source='1.mp4' ;
    this.play = 0;
  
   }

  ngOnInit(){
 
    
    this.listFilms = this.sp.getFilms() ;
    
    
  }
  closeForm(value: string) {
    this.newItemEvent.emit(value);
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
  watchfilm(){
    this.play = 1 ;
    console.log( this.play +"ffffffffff") ;
  }
  
 

}
