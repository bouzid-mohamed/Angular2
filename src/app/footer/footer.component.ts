import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  vis:boolean ;
  text : string ;

  constructor() { 
    this.vis = true ;
    this.text="" ;
  }

  ngOnInit(): void {
   
  }
  about(){
    this.vis = false ;
    this.text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " ;
  }
  ref(){
    this.vis = false ;
    this.text ="Lorem Ipsum is simply dummy . " ;
  }
  team(){
    this.vis = false ;
    this.text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " ;
  }

}
