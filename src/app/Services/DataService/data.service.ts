import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private source=new BehaviorSubject('')
public openBook=this.source
sharedData(Bookdata:any){
  console.log("service",Bookdata)
   this.source.next(Bookdata)
}
}
