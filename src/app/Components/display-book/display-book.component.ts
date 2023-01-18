import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit{

  bookList:any
  bookName:any;
  author:any
  price:any;
  discountPrice:any;
  constructor(private user:UserService){}

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook(){
    this.user.getBooks().subscribe((responce:any) =>{
      console.log(responce)
      this.bookList=responce.data
      console.log(this.bookList)
    })
  }
}
