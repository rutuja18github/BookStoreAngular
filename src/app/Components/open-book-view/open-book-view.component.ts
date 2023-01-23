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
  constructor(private dataService:DataService,private bookService:BookService,private snackbar : MatSnackBar){}
  ngOnInit(): void {
    // this.dataService.openBook.subscribe((result)=>{
    //   this.bookDetails=result
    //   this.bookId=this.bookDetails._id
    //   console.log('open book ',this.bookDetails._id)
    // }
    // )
    this.bookId = localStorage.getItem('bookId')
    this.getBookById();
  }
  getBookById(){
    this.bookService.getBookById(this.bookId).subscribe((response:any)=>{
      console.log('quick view of book',response.data)
      this.bookDetails = response.data;
    })
  }
  addInCart(){
    let data={
      _id:this.bookId
    }
    console.log(data)
    this.bookService.addToCart(data).subscribe((response:any)=>{
      console.log(response)
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
