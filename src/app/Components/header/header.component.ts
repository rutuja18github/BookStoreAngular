import { Component,Input,OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartlist: any[] = []
  //@Input() cartSize:any
  cartSize=0
  constructor(private dataService:DataService,private bookService:BookService){}
  ngOnInit(): void {
    this. getCartSize()
  }

  search(event:any){
    console.log(event)
     this.dataService.sharedData(event)
  }
  getCartSize(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
       response.data.books.forEach((result:any)=>{
       this.cartSize =this.cartSize  + result.quantity
      })
       console.log(this.cartSize)
      
    })
  }
}
