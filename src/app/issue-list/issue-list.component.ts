import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service'
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers:[IssueService]
})
export class IssueListComponent implements OnInit {

  constructor(
    private router: Router,
    private issueService: IssueService
  ) { }
  issueData = [];
  searchText: string = "";
  numPage: number = 0;
  rowPerPage: number =10;
  total: number = 0;
  paging = [];
  ngOnInit() {
    this.onSearch();
  }
  onGetIssue() {
    //Reactive
    this.issueService.loadItem().subscribe(
      datas => {
        this.issueData = datas;
      },
      err => {
        console.log(err);
      });
  }
  onAddbtnClick() {
    this.router.navigate(['support', 'issue']);
  }
  onEditbtnClick(id) {
    this.router.navigate(['support', 'issue', id]);
  }
  onDelbtnClick(id) {
    this.issueService.delItem(id).subscribe(
      datas => {
        Materialize.toast('Delete data Complete', 3000);
        this.onGetIssue();
      },
      err => {
        console.log(err);
      });
  }
  onSearch() {
    let searchBody = {
      searchText: this.searchText,
      numPage: this.numPage,
      rowPerPage: this.rowPerPage
    }
    this.issueService.SearchData(searchBody).subscribe(
      data => {
        this.issueData = data.row;
        this.total = data.total;
        this.renderPaging();
      }, error => {
        console.log(error);
      }
    );
  }
  renderPaging() {
    let allPage=Math.ceil(this.total/this.rowPerPage);
    this.paging=[];
    for(let i=0;i<allPage;i++){
      this.paging.push(i+1);
    }
      
  }
  gotoPage(pID){
    this.numPage=pID;
    this.onSearch();
  }

  onAttachbtnClick(id) {
    this.router.navigate(['support', 'issue-attach', id]);
  }
}
