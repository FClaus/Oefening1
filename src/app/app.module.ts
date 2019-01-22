import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './service/product.service';

// define the routes
const appRoutes: Routes = [
  { path: 'add', component: ProductAddComponent },
  //{ path: '**', component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                  FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, 
                  ProductAddComponent],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
