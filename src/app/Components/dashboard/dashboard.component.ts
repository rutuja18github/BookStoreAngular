import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cartlist: any[] = []
  cartSize:any
  constructor(private dataService:DataService,private bookService:BookService){}
  ngOnInit(): void {
    this.cartQuantity()
  }

  cartQuantity(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response)
      this.cartlist = response.data.books,
      this.cartSize=this.cartlist.length
      console.log(this.cartSize)
    })
  }
  search(event:any){
    console.log(event)
     this.dataService.sharedData(event)
  }
}
