import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';
import { Product } from './Entities/Product';

@Injectable(
  
)
export class ProductService {

  apiurl = 'https://localhost:44393/api/products';
  headers = new HttpHeaders().set('Content-Type',
  'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http : HttpClient)
  {

  }
  private handleError(error: any)
  {
    console.error(error);
    return throwError(error);
  }
  getProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
     catchError(this.handleError)
    );
  }

  deleteProduct (id: string) : Observable<Product>
  {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Product> (url, this.httpOptions).pipe
    (catchError(this.handleError));
  }
  
  
  // products : Product[] = [{
  //   "ProductID" : "1",
  //   "Color": "Red",
  //   "Details": "It is made of Carbon Fiber",
  //   "ExpiryDate": null,
  //   "ImageUrl": "hammer.jpg",
  //   "InStock": false,
  //   "Price": 4000,
  //   "Quantity": 5,
  //   "Rating": 5,
  //   "Title": "Hammer"
  //   },
  //   {
  //   "ProductID": "2",
  //   "Color": "Blue",
  //   "Details": "It is made of Steel",
  //   "ExpiryDate": null,
  //   "ImageUrl": "saw.jpg",
  //   "InStock": true,
  //   "Price": 300,
  //   "Quantity": 5,
  //   "Rating": 4,
  //   "Title": "Saw"
  //   }];

  
  getProductsById(id: string) : Observable<Product>{
    const url= `${this.apiurl}/${id}`;
    return this.http.get<Product> (url).pipe(
      catchError(this.handleError)
    );
    // let p = this.products.find(
    //   (p1)=> p1.ProductID ==id    
    // );
    // return p;

  }

  
  updateProduct(id,prod) : Observable<null | Product>
  {
    const url= `${this.apiurl}/${id}`;
    return this.http.put<Product>(url, prod, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  //   updateProduct(prod: Product): void{
  //     let index = this.products.indexOf(
  //       this.products.find(
  //         (pTemp)=>pTemp.ProductID==prod.ProductID
  //         )
  //     )
  //     this.products.splice(index, 1);
  //     this.products.push(prod);
  // }
    }
  addProduct(prod: Product) : Observable<Product>
  {
 return this.http.post<Product> (this.apiurl, prod, this.httpOptions).pipe(
   tap(data => console.log(data)),
   catchError(this.handleError)
 );
  }

  
}



