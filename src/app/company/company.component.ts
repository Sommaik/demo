import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  mode: string = "ADD";
  id: number = 0;
  compCode: string;
  compName: string;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        let id = params['id'];
        this.companyService.findById(id).subscribe(
          company => {
            this.compCode = company.compCode;
            this.compName = company.compName;
          }, error => {
            console.log(error);
          });
        this.mode = "EDIT";
        this.id = id;
      }
    });
  }

  onSave() {
    let comp = {
      compCode: this.compCode,
      compName: this.compName
    }
    let company: Array<any> = [];

    if (this.mode === "EDIT") {
      this.companyService.updateItem(this.id, comp).subscribe(
        data => {
          Materialize.toast('Update item complete', 1000);
          this.router.navigate(['support', 'company-list']);
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.companyService.addItem(comp).subscribe(
        datas => {
          Materialize.toast('Add new item complete', 1000);
          this.router.navigate(['support', 'company-list']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
