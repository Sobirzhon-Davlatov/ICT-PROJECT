import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductlistService } from '../productlist.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products = [];
  public productList = [];
  public ProductListType: any;
  ID: number;
  name: string;
  categoryName="";
  searchStr = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: ProductlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(item => this.products = item)
    this.categoryService.getProductLists().subscribe(data => this.productList = data)
    // let id = parseInt(this.route.snapshot.paramMap.get('productListId'))
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('productListId'));
      this.ID = id;
    });
  }
}
// this.route.paramMap.subscribe(params => {
//   this.ProductListType = this.productList[+params.get('productListId')];
// });