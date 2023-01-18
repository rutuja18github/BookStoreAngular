import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getBooks(){
    let header={
      Headers:new HttpHeaders({
           'Content-Type' : 'application/json'
      })
    }
    return this.httpService.getService("/book/allbook",false,header)
  }
  getBookById(data:any){
    let header={
      Headers:new HttpHeaders({
           'Content-Type' : 'application/json'
      })
    }
    return this.httpService.getService("/book/${data._id}",false,header)
  }
}
