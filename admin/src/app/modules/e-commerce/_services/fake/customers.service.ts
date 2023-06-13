import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel, PaginatorState, SortState, GroupingState } from '../../../../_metronic/shared/crud-table';
import { Customer } from '../../_models/customer.model';
import { baseFilter } from '../../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

const DEFAULT_STATE: ITableState = {
  filter: {},
  paginator: new PaginatorState(),
  sorting: new SortState(),
  searchTerm: '',
  grouping: new GroupingState(),
  entityId: undefined
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends TableService<Customer> implements OnDestroy {
  API_ENDPOINT = `${environment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
  }

  // READ
  findCustomers(tableState: ITableState): Observable<TableResponseModel<Customer>> {
    return this.http.get<Customer[]>(this.API_ENDPOINT).pipe(
      map((response: Customer[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Customer> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  }

  deleteCustomers(ids: number[] = []): Observable<any> {
    const tasks$: any[] = [];
    ids.forEach(id => {
      tasks$.push(this.delete(id));
    });
    return forkJoin(tasks$);
  }

  updateStatusForCustomers(ids: number[], status: number): Observable<any> {
    return this.http.get<Customer[]>(this.API_ENDPOINT).pipe(
      map((customers: Customer[]) => {
        return customers.filter(c => ids.indexOf(c.id as number) > -1).map(c => {
          c.status = status;
          return c;
        });
      }),
      exhaustMap((customers: Customer[]) => {
        const tasks$: any[] = [];
        customers.forEach(customer => {
          tasks$.push(this.update(customer));
        });
        return forkJoin(tasks$);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
