import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent  {
  
  bookArray:any
  constructor(private bookService :BookService){
    this.getBookWishlist()
  }
  getBookWishlist(){
      this.bookService.getWishlist().subscribe((response:any)=>{
        this.bookArray=response.data.books
        //console.log(this.bookArray)
      })
  }
  removeBook(id:any){
    let data={
      _id:id
    }
    this.bookService.removeFromWishlist(data).subscribe((response)=>{
      console.log(response)
      this.getBookWishlist()
    })
  }
}
