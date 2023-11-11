import { GroupingState, PaginatorState, SortState } from "src/app/_metronic/shared/crud-table";

export interface Config {
  paginator: PaginatorState,
  sorting: SortState,
  grouping: GroupingState,
}