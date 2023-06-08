import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 popularProducts: any;
 trendyProducts:undefined | product[];
  public users: any;
  constructor(private product:ProductService,
    private http :HttpClient) {}

  ngOnInit(): void {
    // this.product.popularProducts().subscribe((data)=>{
    //   this.popularProducts=data;
    //   console.log(this.popularProducts);
      
    // })
    this.http.get('http://localhost:3000/seller').subscribe(res => {
    this.popularProducts = res;
  })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
}