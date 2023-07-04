import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountRoutingModule } from './discount-routing.module';
import { DiscountComponent } from './discount.component';
import { AddNewDiscountComponent } from './add-new-discount/add-new-discount.component';
import { EditNewDiscountComponent } from './edit-new-discount/edit-new-discount.component';
import { DeleteNewDiscountComponent } from './delete-new-discount/delete-new-discount.component';
import { ListDiscountsComponent } from './list-discounts/list-discounts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbDatepickerModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';


@NgModule({
  declarations: [DiscountComponent, AddNewDiscountComponent, EditNewDiscountComponent, DeleteNewDiscountComponent, ListDiscountsComponent],
  imports: [
    CommonModule,
    DiscountRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbTooltip,
    NgbModalModule,
    NgbDatepickerModule,
  ]
})
export class DiscountModule { }
