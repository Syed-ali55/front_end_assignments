import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService) {}

  ngOnInit(): void {}

  signup(data:object): void{
    this.seller.userSignUp(data).subscribe((result)=>{ 
      console.warn(result)
    });
         //subscribe is being used because we can use the data from various sides
      // result is passed to the subscriber to fetch the result
    //data is getting passed
  }

}
