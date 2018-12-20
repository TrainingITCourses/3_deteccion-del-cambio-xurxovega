import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../store/services/api.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
  providers: [ApiService],
})

export class SearcherComponent implements OnInit {

  // array with differents values of Type Filter selected on first optional Select
  @Output() filtersValuesOutput  = new EventEmitter<any>();

  public launches:      any[];
  public filterTypes:   any[];
  public filterValues:  any[];
  // public filterValues: Observable<any>;

  constructor( private _api: ApiService ) {  }

  ngOnInit() {
    // console.log('seacher-component Init');
    this.selectFilterType();
    this.selectFilterValue(0);
  }

  selectFilterType() {
    this.filterTypes = [ ... this._api.getFilterTypes()] ;
  }

  // Select possible values of Type Filter choose on Combo
  selectFilterValue(filterType) {

    let i = parseInt(filterType, 10);
    switch (i) {
      case 0: { // Status Filter
        this._api.getLaunchStatus$().subscribe( (res: any): any => this.filterValues = res);
        break;
      }
      case 1: { // Agency Filter
        this._api.getAgencies$().subscribe( (res: any): any => this.filterValues = res);
        break;
      }
      case 2: { // Mission Filter
        this._api.getMissionTypes$().subscribe( (res: any): any => this.filterValues = res);
        break;
      }
    }
    this.filterValues = [ ... this.filterValues ];
  }

  selectLaunches(valueSelected) {
    this.filtersValuesOutput.next(valueSelected);
  }


}
