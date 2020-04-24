import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList = [];

  constructor(private service: ProductlistService) { }

  ngOnInit(): void {
    this.service.getProductLists().subscribe(data => this.productList = data)
    console.log(this.productList.length)
  }
}
