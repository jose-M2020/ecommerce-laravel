import {
  Component,
  Input,
  OnInit,
  ContentChildren,
  QueryList,
  TemplateRef
} from '@angular/core';
import { Column } from './_models/column.interface';
import { GroupingState, SortState } from 'src/app/_metronic/shared/crud-table';
import { SlotDirective } from 'src/app/directives/slot.directive';
import { Config } from './_models/config.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ContentChildren(SlotDirective) slots!: QueryList<SlotDirective>;
  
  @Input()
  columns: Array<Column> = [];
  @Input()
  data: any[] = [];
  @Input()
  config!: Config;

  displayedColumns: Array<string> = [];

  grouping!: GroupingState;
  sorting!: SortState;
  

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((c) => c.field);

    this.grouping = this.config.grouping
    this.sorting = this.config.sorting
    
  }

  getTemplate(slotName: string | undefined): TemplateRef<any> | null {
    const slot = this.slots.find(s => s.appSlot === slotName);
    return slot?.template || null;
  }
  
  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = 'asc';
    } else {
      sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
    }
    // this.productsService.patchState({ sorting });
  }
}
