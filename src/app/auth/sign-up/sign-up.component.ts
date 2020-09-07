
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  singUpData(formData: NgForm) {

    console.log(formData.value.email);
    console.log(formData.value.password);

    const email = formData.value.email;
    const password = formData.value.password;
    this.authService.signUpUsers(email, password);

  }

}
