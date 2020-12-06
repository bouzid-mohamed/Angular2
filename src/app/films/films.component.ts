import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import *  as  data from '../data.json';
import { Film } from '../models/film';
import { FilmServiceService } from '../Services/film-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormsModule, NgForm, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  listFilms: Film[];
  film: Film;
  etat: number = 0;
  modalstyle: string;
  source: string;
  play: Number;
  modalstyle2: string;
  @Input() data: string;
  @Output() newItemEvent = new EventEmitter<string>();
  myForm = new FormGroup({
    file: new FormControl(''),
    photo: new FormControl()
  });




  constructor(private sp: FilmServiceService, private http: HttpClient) {
    this.modalstyle = 'none';

    this.play = 0;
    this.film = new Film();

  }

  ngOnInit() {


    this.listFilms = this.sp.getFilms();


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
    this.modalstyle = 'block';
    this.source = src;
    console.log(this.source);
  }
  close() {
    this.modalstyle = 'none';
    var myVideo: any = document.getElementById("myVideo");
    myVideo.pause();


  }
  watchfilm() {
    this.play = 1;
    console.log(this.film.image.valueOf);
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
      })
  }






}
