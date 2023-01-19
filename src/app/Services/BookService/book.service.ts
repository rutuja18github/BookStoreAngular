import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
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
  getBookById(data:any){
    let header={
      Headers:new HttpHeaders({
           'Content-Type' : 'application/json'
      })
    }
    return this.httpService.getService(`/book/${data._id}`,false,header)
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
}

