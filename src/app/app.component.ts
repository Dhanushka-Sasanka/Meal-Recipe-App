import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  routePath = 'recipe';


  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCK2SoJqSkyaJNTNkQ0Hb-47AZ8izmLet8",
      authDomain: "meal-recipe-app.firebaseapp.com",
    });
  }


  onNavigate(event:string){
    console.log(event);
    this.routePath = event;

  }
}
