import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewMoreComponent } from '../view-more/view-more.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ViewMoreComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productList: any[] = [];
  error: string | null = null;

  constructor(private http: HttpClient,private router: Router) { }

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
        // console.log(this.productList);
        // console.log("call....product..");
      }
    );
  }
  viewMore(product: any): void {
    this.router.navigate([`/view-more/${product.id}`], { state: { product } });
  }
  
}
