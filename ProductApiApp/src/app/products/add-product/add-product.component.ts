import { Component, OnInit } from '@angular/core';
import { Product } from '../Entities/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{

  title : "Add Product in Database";
  model : Product;


  constructor(private productService: ProductService){
    this.model= new Product();
  }

  saveProduct(){
    this.productService.addProduct(this.model).subscribe(data => 
      {
        console.log(data);
      });
  
    alert("Congratulations your data is added successfully!!!");
    //for sending to API
    //console.log(loginForm.value);
    
    //for checking status
    //console.log(loginForm.status);  
  }
  


}
