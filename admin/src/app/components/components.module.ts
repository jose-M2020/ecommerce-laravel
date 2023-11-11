import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { CRUDTableModule } from '../_metronic/shared/crud-table';



@NgModule({
  declarations: [
    DropdownComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    CRUDTableModule,
  ],
  exports: [
    DropdownComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
