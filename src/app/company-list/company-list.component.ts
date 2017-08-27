import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompanyService]
})
export class CompanyListComponent implements OnInit {

  constructor(
    private router: Router,
    private companyService: CompanyService
  ) { }
  companyData = [];
  searchText = "";
  numPage = 0;
  rowPerPage = 2;
  total = 0;
  paging = [];

  ngOnInit() {
    // if (localStorage.getItem('company')) {
    //   this.companyData = JSON.parse(localStorage.getItem('company'));
    // } 
    // this.loadItem();
    this.search();
  }

  loadItem() {
    this.companyService.loadItem().subscribe(
      datas => {
        this.companyData = datas;
      },
      err => {
        console.log(err);
      });
  }

  onAddButtonClick() {
    this.router.navigate(['support', 'company']);
  }

  onDeleteButtonClick(id) {
    // this.companyData.splice(id, 1);
    // localStorage.setItem('company', JSON.stringify(this.companyData));
    this.companyService.deleteItem(id).subscribe(
      datas => {
        this.loadItem();
      },
      err => {
        console.log(err);
      });
  }

  onEditButtonClick(id) {
    this.router.navigate(['support', 'company', id]);
  }

  search() {
    let searchBody = {
      searchText: this.searchText,
      rowPerPage: this.rowPerPage,
      numPage: this.numPage
    }
    this.companyService.search(searchBody).subscribe(data => {
      this.companyData = data.rows;
      this.total = data.total;
      this.renderPaging();
    }, error => {
      console.log(error);
    });
  }

  renderPaging(){
    let allPage = Math.ceil(this.total / this.rowPerPage);
    this.paging = [];
    for(let i=0;i<allPage; i++){
      this.paging.push(i+1);
    }
  }

  gotoPage(pId){
    this.numPage = pId;
    this.search();
  }
}
