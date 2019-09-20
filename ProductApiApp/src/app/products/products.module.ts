import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductFilterPipe } from './productfilter.pipe';
//import { ProductInMemDataService } from './product-in-mem-data.service';
import { ProductService } from './product.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [AddProductComponent, DeleteProductComponent, EditProductComponent, ListProductComponent, ProductDetailsComponent,ProductFilterPipe],
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers : [ProductService]
})



export class ProductsModule { }
