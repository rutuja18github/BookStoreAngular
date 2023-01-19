import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartlist : any

  constructor( private bookService : BookService){}

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
      this.cartlist = response.data
    })
  }
}
