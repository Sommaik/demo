import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user/user';
import { UserService } from '../shared/user/user.service';
import { UploadService } from '../shared/user/upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, UploadService]
})
export class UserComponent implements OnInit {

  user: User;
  mode: string = "ADD";
  id: string = "";
  filesToUpload = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uploadService: UploadService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        let id = params['id'];
        this.userService.findById(id).subscribe(
          user => {
            this.user = user._id;
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
      this.userService.updateItem(this.id, this.user).subscribe(
        data => {
          Materialize.toast('Update item complete', 1000);
          this.router.navigate(['support', 'user-list']);
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.userService.addItem(this.user).subscribe(
        datas => {
          this.id = this.user._id;
          this.upload();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  fileChangeEvent(fileInput) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    this.uploadService.makeFileRequest(
      "avatar",
      environment.apiUrl + "/user/profile/" + this.id, 
      [], this.filesToUpload).subscribe((res) => {
        Materialize.toast('save complete.', 1000);
        this.router.navigate(['support', 'user-list']);
    })
  }
}
