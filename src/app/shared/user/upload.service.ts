import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadService {

  constructor(private http: Http) { }

  makeFileRequest(fildname: string, url: string, params: any, fileList: Array<File>): Observable<any> {
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append(fildname, file, file.name);
      for (var p in params) {
        formData.append(p, params[p]);
      }
      let headers = new Headers({
      });
      /** No need to include Content-Type in Angular 4 */
      // headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'bearer ' + localStorage.getItem('token'));
      let options = new RequestOptions({
        headers: headers
      });
      return this.http.post(url, formData, options)
        .map((res: Response) => {
          return res.json();
        })
        .catch((error: any) => Observable.throw(error));
    }
  }

}
