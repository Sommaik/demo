import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class IssueService {

  options: RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    this.options = new RequestOptions({ headers: headers });
  }

  loadCompany(): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/company`, this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loadCustomer(): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/customer`,this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loadUser(): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/user`)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loadItem(): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/issue`,this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loadItemByID(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/issue/findByID/${id}`,this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addItem(body): Observable<any> {
    return this.http.post(`${environment.apiUrl}/issue`, 
    body, this.options) // ...using post request
      .map((res: Response) => {
        return res.json()
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }
  delItem(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/issue/${id}`
  , this.options) // ...using post request
      .map((res: Response) => {
        return res.json()
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }
  UpdateItem(id, body): Observable<any> {
    return this.http.put(`${environment.apiUrl}/issue/${id}`, 
    body, this.options) // ...using post request
      .map((res: Response) => {
        return res.json()
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }
  SearchData(body) {
    return this.http.post(`${environment.apiUrl}/issue/search`, 
    body, this.options) // ...using post request
      .map((res: Response) => {
        return res.json()
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }
}
