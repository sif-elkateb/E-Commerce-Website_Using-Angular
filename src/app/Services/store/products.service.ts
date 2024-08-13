import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../Models/product';
@Injectable()
export class ProductsService {
  apiUrl = 'http://localhost:3000/products';
  private searchTerm = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTerm.asObservable();

  constructor(private http: HttpClient) {}

  updateSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
