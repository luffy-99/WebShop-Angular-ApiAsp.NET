import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError: boolean;
  constructor(private authService: AuthenticationService, private route: Router) { }
  token: any;
  ngOnInit() {
  }
  OnLogin(value) {
    this.authService.Login(value.UserName, value.PassWord)
    .subscribe(data => {
      this.token = data;
      console.log(this.token);
      localStorage.setItem('currentToken', data.access_token);
      console.log(localStorage.getItem('currentToken'));
      this.route.navigate(['/home']);
    },
     (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }
}
