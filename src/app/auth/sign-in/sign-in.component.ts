import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  singInData(formData : NgForm){
    const email = formData.value.email;
    const password = formData.value.password;
    this.authService.signInUsers(email, password);
  }
}
