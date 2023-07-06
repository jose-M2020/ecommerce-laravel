import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardsModule } from '../../_metronic/partials/content/dashboards/dashboards.module';
import { WidgetsModule } from 'src/app/_metronic/partials/content/widgets/widgets.module';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDeliveryComponent } from './components/product-delivery/product-delivery.component';
import { SaleChartComponent } from './components/charts/sale-chart/sale-chart.component';
import { UserChartComponent } from './components/charts/user-chart/user-chart.component';
import { SaleCardComponent } from './components/stat-cards/sale-card/sale-card.component';
import { OrderCardComponent } from './components/stat-cards/order-card/order-card.component';
import { CustomerCardComponent } from './components/stat-cards/customer-card/customer-card.component';
import { ProductCardComponent } from './components/stat-cards/product-card/product-card.component';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, ProductsComponent, ProductDeliveryComponent, SaleChartComponent, UserChartComponent, SaleCardComponent, OrderCardComponent, CustomerCardComponent, ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    DashboardsModule,
    WidgetsModule
  ],
})
export class DashboardModule {}
