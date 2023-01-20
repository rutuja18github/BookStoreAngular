import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private searchWord=new BehaviorSubject('')
public search=this.searchWord
sharedData(searchData:any){
  console.log("service",searchData)
   this.searchWord.next(searchData)
}
}
