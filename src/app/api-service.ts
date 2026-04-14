import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // ✅ Get all jewellery products
  getproduct() {
    return this.http.get("https://fakestoreapi.com/products/category/jewelery");
  }

  // ✅ Get single product details by ID
  getproductdetailsId(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}