import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class CompanyService {

  options: RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    this.options = new RequestOptions({ headers: headers });
  }

  loadItem(): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/company`, this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }

  addItem(body): Observable<any> {
    let bodyString = JSON.stringify(body);
    return this.http.post(
      `${environment.apiUrl}/company`, bodyString, this.options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  deleteItem(id): Observable<any[]> {
    return this.http.delete(`${environment.apiUrl}/company/${id}`, this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }

  findById(id): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/company/findById/${id}`,
      this.options
    ).map((res: Response) => {
      return res.json();
    })
      .catch((error: any) => Observable.throw(error));
  }

  updateItem(id, body): Observable<any> {
    let bodyString = JSON.stringify(body);
    return this.http.put(
      `${environment.apiUrl}/company/${id}`, bodyString, this.options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  search(body): Observable<any> {
    let bodyString = JSON.stringify(body);
    return this.http.post(
      `${environment.apiUrl}/company/find`, bodyString, this.options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }
}
