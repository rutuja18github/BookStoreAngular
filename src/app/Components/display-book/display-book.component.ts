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
  constructor(private bookService:BookService,private dataService:DataService,private router:Router){}

  ngOnInit(): void {
    this.dataService.search.subscribe((result:any)=>{
      this.search=result
      console.log(result)
    })
    this.getAllBook()
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
}
