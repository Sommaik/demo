import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

  onAddButtonClick(){
    this.router.navigate(['support', 'user']);
  }

}
