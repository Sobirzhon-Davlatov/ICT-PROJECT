import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { products } from '../app/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  products_url: string = "http://127.0.0.1:8000/products";
  getProducts(): Observable<any[]> {
    return this.http.get<products[]>(this.products_url)
  }
}
