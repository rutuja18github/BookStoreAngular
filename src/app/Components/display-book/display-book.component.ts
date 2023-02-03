import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit{
  
  bookList:any
  noOfBooks!: number;
  bookName:any;
  author:any
  price:any;
  discountPrice:any;
  quantity:any
  search=''
  page:number=1;
  totalLength:any;
  cartSize=0
  constructor(private bookService:BookService,private dataService:DataService,private router:Router){}

  ngOnInit(): void {
    this.dataService.search.subscribe((result:any)=>{
      this.search=result
      console.log(result)
    })
    this.getAllBook()
    this. getCartSize()
  }

  getAllBook(){
    this.bookService.getBooks().subscribe((responce:any) =>{
      console.log(responce)
      this.bookList=responce.data
      this.noOfBooks=this.bookList.length
      console.log(this.bookList)
    })
  }

  openBookDetails(bookId:any){
    localStorage.setItem('bookId',bookId)
    // console.log(book)
    // this.dataService.sharedData(book);
    this.router.navigate([ '/dashboard/openBook' ])
  }
  getCartSize(){
    this.bookService.getCart().subscribe((response : any)=>{
       response.data.books.forEach((result:any)=>{
       this.cartSize =this.cartSize  + result.quantity
      })
       console.log(this.cartSize)
      
    })
  }
  addBookToCart(bookId:any){
    let data={
      _id:bookId
    }
    console.log(data)
    this.bookService.addToCart(data).subscribe((response:any)=>{
      console.log(response)
    })
    this.cartSize=this.cartSize +1
  }
  addBookToWishlist(bookId:any){
    let data={
      _id:bookId
    }
    this.bookService.addToWishlist(data).subscribe((response:any)=>{
      console.log(response)  
    })
  }
  PriceLowToHigh(){
    console.log('low to high')
    this.bookList = this.bookList.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    console.log(this.bookList)
  }

  PriceHighToLow(){ 
    console.log('low to high')
    this.bookList = this.bookList.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
}
