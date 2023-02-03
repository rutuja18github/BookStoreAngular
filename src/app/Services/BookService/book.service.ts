import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  private refrashrequired=new Subject<void>()
  get Refrashrequired(){
     return this.refrashrequired
  }
  constructor(private httpService: HttpService) { 
    this.token= localStorage.getItem('Token')
  }

  getBooks(){
    let header={
      Headers:new HttpHeaders({
           'Content-Type' : 'application/json'
      })
    }
    return this.httpService.getService("/book/allbook",false,header)
  }
  getBookById(bookId:any){
    let header={
      Headers:new HttpHeaders({
           'Content-Type' : 'application/json'
      })
    }
    return this.httpService.getService(`/book/${bookId}`,false,header)
  }

  addToCart(data:any){
    console.log(this.token)
    console.log(data)
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
  
    return this.httpService.postService(`/cart/${data._id}`,data, true, header)
    // .pipe(
    //   tap(() => { this.refrashrequired.next()})
    // )
  }
  getCart() {
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.getService("/cart/get",true,header)
  }
  removeBook(data:any){
    console.log(this.token)
    console.log(data)
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
  
    return this.httpService.postService(`/cart/remove/${data._id}`,data, true, header)
  }

  addToWishlist(data:any){
    console.log(this.token)
    console.log(data)
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
  
    return this.httpService.postService(`/wishlist/${data._id}`,data, true, header)
  }
  getWishlist() {
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.getService("/wishlist/get",true,header)
  }

  removeFromWishlist(data:any) {
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.putService(`/wishlist/remove/${data._id}`,data,true,header)
  }
  purchase(data:any) {
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.putService("/cart/purchase",data,true,header)
  }
  
 
  customerDetail(data:any){
    console.log(this.token)
    console.log(data)
    let header={
      headers:new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization':'Bearer '+ this.token,
      })
    }
  
    return this.httpService.postService("/customer",data, true, header)
  }
}

