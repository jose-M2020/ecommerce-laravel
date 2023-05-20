import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeInitialComponent } from './home-initial/home-initial.component';
import { LandingProductDetailComponent } from './landing-product-detail/landing-product-detail.component';
import { ListsFilterProductsComponent } from './lists-filter-products/lists-filter-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeInitialComponent,
    LandingProductDetailComponent,
    ListsFilterProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
