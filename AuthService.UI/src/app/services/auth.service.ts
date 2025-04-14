import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(uri: string): Observable<any> {
    debugger;
    return this.http.get<any>(uri);
  }

  create(username: string, password: string,uri: string): Observable<any> {
    debugger;
    const loginPayload = { userName: username, password: password };
    return this.http.post<any>(uri, loginPayload);
  }

  update(username: string, password: string,uri: string): Observable<any> {
    debugger;
    const loginPayload = { userName: username, password: password };
    return this.http.put<any>(uri, loginPayload);
  }

  delete(uri: string): Observable<any> {    
    debugger;
    return this.http.delete<any>(uri);
  }
}
