import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { DeleteCategorieComponent } from './components/delete-categorie/delete-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
1

@NgModule({
  declarations: [CategorieComponent, CategorieListComponent, AddCategorieComponent, EditCategorieComponent, DeleteCategorieComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbDatepickerModule,
  ]
})
export class CategorieModule { }
