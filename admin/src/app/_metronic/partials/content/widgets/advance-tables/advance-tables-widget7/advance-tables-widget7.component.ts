import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advance-tables-widget7',
  templateUrl: './advance-tables-widget7.component.html',
})
export class AdvanceTablesWidget7Component {
  @Input() cssClass: any;
  currentTab = 'Day';

  constructor() {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
