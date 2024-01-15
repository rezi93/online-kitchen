import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { StorageService } from './storage.service';
import { DataService } from './data.service';
import { TOKEN_KEY } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient,private _localst:StorageService) { }

  authUser(data: { email: string, pwd: string }): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      username: data.email,
      pass: data.pwd
    };

    return this._http.post<any>(`https://dummyjson.com/auth/login`, body, { headers: headers }).pipe(
      tap((result: any) => {
        this._localst.setitem('TOKEN_KEY', result.token);
      })
    );
  }
  isAuthorized(){
    return this._localst.itemExist('TOKEN_KEY')
  }
}
