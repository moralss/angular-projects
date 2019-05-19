import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { from } from "rxjs";
import { Options } from '../app';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})


export class SessionComponent implements OnInit {
  isToggle: boolean;
  value = "";
  response: Object;

  constructor(private http: HttpClient) {

    // this.isToggle = false;
  }


  ngOnInit() {
    this.getFromApi()
  }



  getFromApi() {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      this.response = data
    });
  }


  saySomething(): void {
    console.log(this.response);
    if (!this.isToggle) {
      this.value = "I love coding"
      this.isToggle = true;
    } else {
      this.value = "I love football"
      this.isToggle = false;
    }

  }

}
