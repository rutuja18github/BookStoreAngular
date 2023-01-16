import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  signup(data: any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  return this.httpService.postService("/users/signup", data, false, header )
  }
}
