import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceAuthRoutingModule } from './ecommerce-auth-routing.module';
import { EcommerceAuthComponent } from './ecommerce-auth.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { ProfileClientHomeComponent } from './profile-client/profile-client-home/profile-client-home.component';
import { ProfileInformationComponent } from './profile-client/profile-information/profile-information.component';
import { ProfilePasswordsComponent } from './profile-client/profile-passwords/profile-passwords.component';
import { WishlistClientsComponent } from './profile-client/wishlist-clients/wishlist-clients.component';
import { OrdersClientsComponent } from './profile-client/orders-clients/orders-clients.component';
import { OrdersReviewAddClientsComponent } from './profile-client/orders-review-add-clients/orders-review-add-clients.component';
import { OrdersReviewClientsComponent } from './profile-client/orders-review-clients/orders-review-clients.component';
import { ProfileAddressComponent } from './profile-client/profile-address/profile-address.component';


@NgModule({
  declarations: [
    EcommerceAuthComponent,
    CheckoutPaymentComponent,
    ProfileClientComponent,
    ShoppingCartsComponent,
    ProfileClientHomeComponent,
    ProfileInformationComponent,
    ProfilePasswordsComponent,
    WishlistClientsComponent,
    OrdersClientsComponent,
    OrdersReviewAddClientsComponent,
    OrdersReviewClientsComponent,
    ProfileAddressComponent
  ],
  imports: [
    CommonModule,
    EcommerceAuthRoutingModule
  ]
})
export class EcommerceAuthModule { }
