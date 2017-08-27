import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title:string = "This is a title.";
  show: boolean = false;
  list: Array<string> = ["One","Two","Three"];
  isActive:boolean = true;
  conditionExpression:string = "A";
  case1Exp:string = "B";
  price:number = 12345678;
  currentDate = new Date();
  
  ngOnInit() {
  }

  onClick(){
    this.title="click...";
    this.show = !this.show;
    this.isActive = !this.isActive;
  }

}
