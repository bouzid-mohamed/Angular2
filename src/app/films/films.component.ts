import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Film } from '../models/film';
import { FilmServiceService } from '../Services/film-service.service';
import { ActivatedRoute,Router  } from '@angular/router';

import {AbstractControl, FormGroup, FormsModule, NgForm, FormControl,Validators, FormBuilder  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  movie_form : FormGroup;
  formb : FormBuilder = new FormBuilder();
  listFilms: Film[];
  film: Film;
  movietoModify: Film ;
  etat: number = 0;
  modalstyle: string;
  source: string = "1.mp4" ;
  play: Number;
  modalstyle2: string;
  isHidden: boolean ;
  @Input() data: string;
  @Output() newItemEvent = new EventEmitter<string>();
  myForm = new FormGroup({
    file: new FormControl(''),
    photo: new FormControl()
  });
  text: string ;
  data2: string;
  view:number ;
  listFiltred: Film[];







  constructor(private sp: FilmServiceService, private http: HttpClient,private _router : Router) {
    this.modalstyle = 'none';
    this.play = 0;
    this.film = new Film();
    this.movietoModify= new Film();
    this.isHidden = false ;
    this.data2 = 'none';
    this.view = 0 ;
    
    

  }

  ngOnInit() {

    this.sp.getFilms().subscribe((data:Film[])=>{this.listFilms =data});
    this.movie_form= this.formb.group({
      title1 : ['',[Validators.required, Validators.minLength(3)]],
      notemovie : ['',[Validators.required, Validators.min(0),Validators.max(10)]],
      descmovie : ['',[Validators.required, Validators.minLength(15),Validators.maxLength(1000)]],
      catmovie : ['',[Validators.required]] 
      
     
    })
    

   
    
  }
  get title1() { return this.movie_form.get('title1');}
  get notemovie(){return this.movie_form.get('notemovie');}
  get descmovie (){return this.movie_form.get('descmovie');}
  get photomovie (){return this.movie_form.get('photomovie');} 
  get trailermovie (){return this.movie_form.get('trailermovie');}
  get fullmovie (){return this.movie_form.get('fullmovie');} 
  get catmovie (){return this.movie_form.get('catmovie');} 
 
  isHiddenFalse(){
    this.isHidden=false ;
  }
  closeForm(value: string) {
    this.newItemEvent.emit(value);
  }
  enter(i) {
    this.listFilms[i].etat = 1;
  }
  leave(i) {

    this.listFilms[i].etat = 0;
  }
  change(src) {
    this.source = src;
    (document.getElementById('mysrc') as HTMLImageElement).src = "http://localhost:80/trailers/"+src;
    this.modalstyle = 'block';
  }
  close() {
    this.modalstyle = 'none';
    var myVideo: any = document.getElementById("mysrc");
    myVideo.pause();


  }
  watchfilm(a:Film) {
    
   let f: Film = new Film() ;
   f=a ;
   f.nbr = a.nbr+1 ;
   this.sp.updateMovie(f.id,f);

   


   
   
  }
  addFilm() {
    console.log(this.film);
    const formData = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();

    let br = (<HTMLInputElement>document.getElementById('uploadBR')).files[0];
    formData.append('file', br);
    this.http.post('http://localhost:80/upload.php', formData)
      .subscribe(res => {
      })

    let tr = (<HTMLInputElement>document.getElementById('uploadTR')).files[0];
    formData2.append('file', tr);
    this.http.post('http://localhost:80/uploadTrailer.php', formData2)
      .subscribe(res => {
      })

    let mr = (<HTMLInputElement>document.getElementById('uploadMR')).files[0];
    formData3.append('file', mr);
    this.http.post('http://localhost:80/uploadMovie.php', formData3)
      .subscribe(res => {
      }) ;
      this.film.image = br.name  ; 
      this.film.video = tr.name  ; 
      this.film.full = mr.name  ; 
      this.film.nbr = 0 ;
      this.sp.addFilm(this.film).subscribe();
      
      this.closeForm('none') ;
      this.text = "Movie Added " ;
      this.ngOnInit() ;
      this.isHidden = true ;
    
  }
  delete(id:number){
    confirm( "Want to delete this film ? ");
    this.sp.deleteFilm(id).subscribe();
    this.text = "Movie Deleted " ;
    //this.ngOnInit() ;
    this.isHidden = true ;
    location.reload();
  }
  formupdate(a:Film){
    this.data2 = 'block';
    this.movietoModify = a;
    

  }
  closeFormup(){
    this.data2 ='none' ;
  }
  update(){

    console.log(this.film);
    const formData = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();

    let br = (<HTMLInputElement>document.getElementById('uploadB')).files[0];
    formData.append('file', br);
   
    let tr = (<HTMLInputElement>document.getElementById('uploadT')).files[0];
    

    let mr = (<HTMLInputElement>document.getElementById('uploadM')).files[0];
   
      if(br!=null){
        this.http.post('http://localhost:80/upload.php', formData)
        .subscribe(res => {
        }) ;
  
      this.movietoModify.image = br.name  ; }
      if(tr!=null){
        formData2.append('file', tr);
    this.http.post('http://localhost:80/uploadTrailer.php', formData2)
      .subscribe(res => {
      })
      this.movietoModify.video = tr.name  ; }
      if(mr != null){
        formData3.append('file', mr);
        this.http.post('http://localhost:80/uploadMovie.php', formData3)
          .subscribe(res => {
          }) ;
      this.movietoModify.full = mr.name  ; }
      
      
      this.sp.updateMovie(this.movietoModify.id,this.movietoModify).subscribe(next=>this._router.navigateByUrl('/'));
    
      this.data2 = 'none' ;
      this.text = "Edited Movie" ;
      this.isHidden=true;
  }
  changeview(){
   this.view = 1 ;
   let tr = (<HTMLInputElement>document.getElementById('search')).value;
   let listF = this.listFilms.filter(x=>x.categorie.toUpperCase().includes(tr.toUpperCase())|| x.title.toUpperCase().includes(tr.toUpperCase())||x.description.toUpperCase().includes(tr.toUpperCase()) ) ;
  
   this.listFiltred= listF ;
  
  }
  
 y


}
