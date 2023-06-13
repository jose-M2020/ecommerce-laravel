import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../../../../_metronic/shared/crud-table';
import { Product } from '../../_models/product.model';
import { baseFilter } from '../../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends TableService<Product> implements OnDestroy {
  API_ENDPOINT = `${environment.apiUrl}/products`;
  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
  }

  // READ
  findProducts(tableState: ITableState): Observable<TableResponseModel<Product>> {
    return this.http.get<Product[]>(this.API_ENDPOINT).pipe(
      map((response: Product[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Product> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  }

  deleteProducts(ids: number[] = []): Observable<any> {
    const tasks$: any[] = [];
    ids.forEach(id => {
      tasks$.push(this.delete(id));
    });
    return forkJoin(tasks$);
  }

  updateStatusForProducts(ids: number[], status: number): Observable<any> {
    return this.http.get<Product[]>(this.API_ENDPOINT).pipe(
      map((products: Product[]) => {
        return products.filter(c => ids.indexOf(c.id as number) > -1).map(c => {
          c.status = status;
          return c;
        });
      }),
      exhaustMap((products: Product[]) => {
        const tasks$: any[] = [];
        products.forEach(product => {
          tasks$.push(this.update(product));
        });
        return forkJoin(tasks$);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
