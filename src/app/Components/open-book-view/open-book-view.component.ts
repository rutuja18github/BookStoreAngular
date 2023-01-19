import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private dataService:DataService,private bookService:BookService){}
  ngOnInit(): void {
    this.dataService.openBook.subscribe((result)=>{
      this.bookDetails=result
      this.bookId=this.bookDetails._id
      console.log('open book ',this.bookDetails._id)
    }
    )
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
}
