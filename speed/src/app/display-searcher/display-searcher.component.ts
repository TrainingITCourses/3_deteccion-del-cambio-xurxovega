import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-searcher',
  templateUrl: './display-searcher.component.html',
  styleUrls: ['./display-searcher.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaySearcherComponent implements OnInit {

  @Input() filterTypesInput: any[];
  @Input() valueFilterInput: any[];

  @Output() changeFilterType  = new EventEmitter();
  @Output() changeFilterValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log('dis-seacher-component Init');
  }

  public selectFilterType(valueSelected) {
    this.changeFilterType.next(valueSelected);
  }

  public selectFilterValue(filterValues: any ) {
    this.changeFilterValue.next(filterValues);
  }

}
