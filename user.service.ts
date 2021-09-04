import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient){}
 getUsers():Observable<Array<Users>>{
  return this.httpClient.get<Users[]>('http://localhost:3000/users');
  }
  addNote(user :Users): Observable<Users> {
    return  this.httpClient.post<Users>('http://localhost:3000/users',user);

  }
  
}
