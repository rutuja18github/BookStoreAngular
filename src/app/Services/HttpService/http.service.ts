import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }

  postService(url: string, requestData: any, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.post(this.baseUrl + url, requestData, token && httpOptions)
  }
 
}
