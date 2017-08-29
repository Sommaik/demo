import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/customer/customer.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService, CompanyService]
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  companyData = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private companyService: CompanyService
  ) {
    this.customer = new Customer();
  }

  mode: string = "ADD";
  id: number = 0;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.companyService.loadItem().subscribe((data) => {
        this.companyData = data;
        setTimeout(() => {
          $('select').material_select();
        }, 100);
      });
      if (params['id']) {
        let id = params['id'];
        this.customerService.findById(id).subscribe(
          customer => {
            this.customer = customer;
            setTimeout(() => {
              Materialize.updateTextFields();
            }, 1000);
          }, error => {
            console.log(error);
          });
        this.mode = "EDIT";
        this.id = id;
      }
    });
  }

  onSave() {
    if (this.mode === "EDIT") {
      this.customerService.updateItem(this.id, this.customer).subscribe(
        data => {
          Materialize.toast('Update item complete', 1000);
          this.router.navigate(['support', 'customer-list']);
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.customerService.addItem(this.customer).subscribe(
        datas => {
          Materialize.toast('Add new item complete', 1000);
          this.router.navigate(['support', 'customer-list']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
