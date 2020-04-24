import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute , Router,ParamMap} from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public products=[];
  public ID:number;
  public product:products;
  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(item => this.products = item)
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('productId'));
      this.ID=id
    });
  }

}
