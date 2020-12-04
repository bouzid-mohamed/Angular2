import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inputVal :string= 'none'   ;
  
  

  constructor() {
    
   }

  ngOnInit(): void {
  }
  change(){
    this.inputVal='' ;
  
    
  }
  addItem(newItem: string) {
    this.inputVal=newItem ;
    console.log(newItem) ;
  }

}
