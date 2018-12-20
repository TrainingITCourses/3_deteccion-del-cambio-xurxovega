import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  public launches: any[];
  public counterLaunch: number;

  constructor( private _api: ApiService ) {  }

  ngOnInit() {
    // console.log('app-home Init');
  }

  selectLaunches(valuesFilters) {
    this._api.getFilterLaunches$(valuesFilters[0], valuesFilters[1])
      .subscribe(
        res => {
          this.launches = [ ... res];
          this.counterLaunch = this.launches.length;
        },
       error => {
         console.log(<any>error);
        }
    );
  }
}
