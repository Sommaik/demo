import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { LoginService } from '../shared/user/login.service';
import { Login } from '../shared/user/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  // email:string;
  // password:string;
  login: Login;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.login = new Login();
  }

  @ViewChild('loginForm') loginForm: NgForm;

  ngOnInit() {

  }

  doLogin() {
    if ($(".invalid").length > 0) {
      Materialize.toast('Invalid', 1000);
    } else {
      this.loginService.doLogin(this.login).subscribe((res) => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['support', 'issue-list']);
        } else {
          Materialize.toast(res.message, 1000);
        }
      });

    }
  }

}
