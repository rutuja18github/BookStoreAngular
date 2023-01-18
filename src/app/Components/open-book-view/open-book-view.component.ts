import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-open-book-view',
  templateUrl: './open-book-view.component.html',
  styleUrls: ['./open-book-view.component.scss']
})
export class OpenBookViewComponent implements OnInit{
  bookDetails:any
 
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.openBook.subscribe((result)=>{
      this.bookDetails=result
      console.log('open book ',this.bookDetails._id)
    }
    )
  }
  
}
