import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-open-book-view',
  templateUrl: './open-book-view.component.html',
  styleUrls: ['./open-book-view.component.scss']
})
export class OpenBookViewComponent implements OnInit{
  bookDetails:any
  bookId:any
  cartSize=0
  constructor(private dataService:DataService,private bookService:BookService,private snackbar : MatSnackBar){}
  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    this.getBookById();
    this. getCartSize()
  }
  getBookById(){
    this.bookService.getBookById(this.bookId).subscribe((response:any)=>{
      console.log('quick view of book',response.data)
      this.bookDetails = response.data;
    })
  }
  getCartSize(){
    this.cartSize=0
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
       response.data.books.forEach((result:any)=>{
       this.cartSize =this.cartSize  + result.quantity
      })
       console.log(this.cartSize)  
    })
  }
  addInCart(){
    let data={
      _id:this.bookId
    }
    console.log(data)
    this.bookService.addToCart(data).subscribe((response:any)=>{
      console.log(response)
      this.cartSize=this.cartSize +1
     })
  }

  addInWishlist(){
    let data={
      _id:this.bookId
    }
    this.bookService.addToWishlist(data).subscribe((response:any)=>{
      console.log(response) 
    })
  }
  openSnackbar(message: any, action: any) {
    this.snackbar.open(message, action,{
      duration: 3000
    })
  }
}
