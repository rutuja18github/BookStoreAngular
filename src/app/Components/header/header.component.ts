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
  @Input() cartSize:any
  constructor(private dataService:DataService,private bookService:BookService){}
  ngOnInit(): void {
    this.cartQuantity()
  }

  cartQuantity(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response)     
    })
  }
  search(event:any){
    console.log(event)
     this.dataService.sharedData(event)
  }
}
