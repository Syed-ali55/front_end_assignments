import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { } //http client is used to import from the url mentioned in postman

  userSignUp(data: any){
    return  this.http.post('http://localhost:3000/seller',data) //this is used for posting using url
    
  }
}
