import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { productList } from '../app/productLists';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  constructor(private http: HttpClient) { }

  main_categories_url: string = "http://127.0.0.1:8000/main_categories";
  one_category_url:string=""
  getProductLists(){
    return this.http.get<productList[]>(this.main_categories_url);
  }
  getOneProduct(ID){
    return this.http.get<productList>("127.0.0.1:8000/${ID}")
  }
}
