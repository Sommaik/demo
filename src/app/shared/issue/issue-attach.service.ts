import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class IssueAttachService {

  constructor(private http:Http) {

   }

  listFile(id): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/issue/attach/`+id)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }

}
