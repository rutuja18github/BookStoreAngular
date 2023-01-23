import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  userDetailForm !: FormGroup
  submitted=false
  bookDetail: any = [];
  step: number = 1;
  // fullname:any
  // mobileNumber:any
  // address:any
  // city:any
  // state:any
  // addressType:any
  cartSize=''
  constructor( private bookService : BookService,private dataService:DataService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.getCart()
    this.userDetailForm=this.formBuilder.group({
      fullname:['',Validators.required],
      mobileNumber:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      addressType:['',Validators.required]
    })
  }
   getCart(){
     this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
      this.bookDetail = response.data.books,
      this.cartSize=this.bookDetail.length
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.userDetailForm.valid) {
      this.step=3
      let data={
        fullname:this.userDetailForm.value.fullname,
        mobileNumber:this.userDetailForm.value.mobileNumber,
        address:this.userDetailForm.value.address,
        city:this.userDetailForm.value.city,
        state:this.userDetailForm.value.state,
        addressType:this.userDetailForm.value.addressType
      }
      this.bookService.customerDetail(data).subscribe((response)=>{
        console.log(response)
      })
  }
  }
}
