import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  bookDetail: any = [];
  step: number = 1;
  fullname:any
  mobileNumber:any
  address:any
  city:any
  state:any
  addressType:any
  constructor( private bookService : BookService){}

  ngOnInit(): void {
    this.getCart()
  }
   getCart(){
     this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
      this.bookDetail = response.data.books,
      console.log(this.bookDetail)
    })
  }

  addBook(id:any){
    let data={
      _id:id
    }
    this.bookService.addToCart(data).subscribe((response)=>{
      console.log(response)
      this.getCart()
    })
  }

  removeBook(id:any){
    let data={
      _id:id
    }
    this.bookService.removeBook(data).subscribe((response)=>{
      console.log(response)
      this.getCart()
    })
  }
//this.router.navigate([ '/dashboard/display' ])
  purchesBook(){
    let data={
      message:'Book Purchase'
    }
    this.bookService.purchase(data).subscribe((response)=>{
      console.log(response)
    })
  }

  secondStep(){
    this.step=2
  }
  addCustomerDetails(){
    this.step=3
    let data={
      fullname:this.fullname,
      mobileNumber:this.mobileNumber,
      address:this.address,
      city:this.city,
      state:this.state,
      addressType:this.addressType
    }
    this.bookService.customerDetail(data).subscribe((response)=>{
      console.log(response)
    })
  }
}
