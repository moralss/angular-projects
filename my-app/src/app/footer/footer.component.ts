import { Component, OnInit } from '@angular/core';
import {Options}  from '../NameInterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  name: [];
  listOfNames :  Options[];  
  constructor() {

    this.listOfNames = [
      { id: 1, name: "thato", style: "sss" },
      { id: 2, name: "sbu", style: "sss" },
      { id: 3, name: "smith", style: "bb" }
    ]
  

  }

  ngOnInit() {


  }



  makeUppcase(name: string) {

  }
}
