import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value:any, filterString:any) {
    if(filterString==''){
      return value;
    }
    const books=[];
    for(const book of value){
      if(book.bookName.toLowerCase().includes(filterString.toLowerCase()) | book.author.toLowerCase().includes(filterString.toLowerCase())){
        books.push(book)
      }
    }
    return books
  }

}
