import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://dummyjson.com'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Method to get data from the API
  getData(endpoint: "products"): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`);
  }
  
  // Method to post data to the API
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data);
  }
}
