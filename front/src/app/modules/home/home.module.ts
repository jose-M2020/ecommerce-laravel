import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeInitialComponent } from './home-initial/home-initial.component';
import { LandingProductDetailComponent } from './landing-product-detail/landing-product-detail.component';
import { ListsFilterProductsComponent } from './lists-filter-products/lists-filter-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInitialComponent,
    LandingProductDetailComponent,
    ListsFilterProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class HomeModule { }
