import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productList: any[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any>('https://dummyjson.com/products').pipe(
      map(response => response.products), // Access the products array from the response
      catchError(err => {
        console.error('Error fetching data:', err);
        this.error = 'Error fetching data. Check the console for details.';
        return of([]); // Return empty array on error
      })
    ).subscribe(
      products => {
        this.productList = products;
        console.log(this.productList);
        console.log("call....product..");
      }
    );
  }
  

}
