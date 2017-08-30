import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  userData = [];
  imgUrl = "http://localhost:3000/user/profile/"
  constructor(
    private router: Router,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  onAddButtonClick() {
    this.router.navigate(['support', 'user']);
  }

  onEditButtonClick(id) {
    this.router.navigate(['support', 'user', id]);
  }

  onDeleteClick(id){
    this.userService.deleteItem(id).subscribe((datas)=>{
      this.loadData();
    });
  }

  loadData(){
    this.userService.loadItem().subscribe((datas)=>{
      this.userData = datas;
    });
  }

}
