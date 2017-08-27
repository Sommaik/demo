import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 

  }

  @ViewChild('loginForm') loginForm:NgForm;
  
  email:string;
  password:string;

  ngOnInit() {

  }

  doLogin(){
    console.log(this.loginForm.valid);
    if($(".invalid").length > 0){
      Materialize.toast('Invalid', 1000);
    }else{
      localStorage.setItem('token', 'login');
      this.router.navigate(['support','issue-list']);
    }
  }

}
