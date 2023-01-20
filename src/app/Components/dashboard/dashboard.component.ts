import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private dataService:DataService){}

  search(event:any){
    console.log(event)
     this.dataService.sharedData(event)
  }
}
