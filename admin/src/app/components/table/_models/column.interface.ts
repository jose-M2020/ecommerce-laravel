import { TemplateRef } from "@angular/core";

type WithHeaderName = { headerName: string; headerTemplate?: TemplateRef<any> };
type WithHeaderTemplate = { headerTemplate: TemplateRef<any>; headerName?: never };

export type Column = {
  field: string;
  cell?: Function;
  isLink?: boolean;
  url?: string;
  bodyTemplate?: TemplateRef<any>,
} & (WithHeaderName | WithHeaderTemplate);