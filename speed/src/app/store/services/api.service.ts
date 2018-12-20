import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, observable, pipe, PartialObserver } from 'rxjs';
import { map, tap, filter, switchMap, flatMap } from 'rxjs/operators';
import { Launch } from '../models/launch';


@Injectable({
    providedIn: 'root'
  })

export class ApiService {
    public agencies:     any[];
    public launches:     any[];
    public status:       any[];
    public missionTypes: any[];
    private _url:        string;
    public missions: any[];

    public filterTypes = [
        { 'id': 0, 'name': 'State', 'value': 0 },
        { 'id': 1, 'name': 'Agency', 'value': 1},
        { 'id': 2, 'name': 'Mission  Type', 'value': 2 } ];

    public tmpObs$: Observable<any>;

    constructor(private _http: HttpClient) {
        this._url = 'http://localhost:4200';
    }

    public getFilterTypes (): any[] {
        return this.filterTypes;
    }

    public getLaunchStatus$ (): Observable<any>  {
        return this._http.get(this._url + '/assets/data/launchstatus.json')
        .pipe(map((res: any) => this.status = res.types));
    }

    public getAgencies$ (): Observable<any>  {
        return this._http.get(this._url + '/assets/data/agencies.json')
        .pipe(map((res: any) => this.agencies = res.agencies));
    }

    public getMissionTypes$ (): Observable<any>  {
        return this._http.get(this._url + '/assets/data/missiontypes.json')
        .pipe(map((res: any) => this.missionTypes = res.types));
    }

    public getLaunches$ (): Observable<any>  {
        return this._http.get(this._url + '/assets/data/launches.json')
        .pipe(map((res: any) => this.launches = res.launches));
    }

    public getFilterLaunches$ (filterType, valueFilter):  Observable<any>  {

        const i = parseInt(filterType, 10);

        switch (i) {

            case 0: { // Status Filter

                return this._http.get(this._url + '/assets/data/launches.json')
                    .pipe(
                        map( (res: any): Launch[] =>
                            this.launches = res.launches.filter(launch => launch.status === valueFilter )
                        ),
                    );
            }
            case 1: { // Agency Filter
                // launches.locations.pads.agencies
                // launches.rocket.agencies
                // launches.missions.agencies
                // launches.lsp.id ¿?

                return this._http.get(this._url + '/assets/data/launches.json')
                    .pipe(
                        // map( (res: any): Launch[] => this.launches = res.launches.filter(a => a.lsp.id === valueFilter)),
                        map( (res: any): Launch[] =>

                            res['launches'].filter( (launch: Launch) =>
                                launch['missions'].some( mission =>
                                    mission.agencies &&
                                    mission['agencies'].some( agency => agency.id === valueFilter)
                                )
                            )
                            ||
                            res['launches'].filter( (launch: Launch) =>
                                launch.location.pads.some( pad =>
                                    pad.agencies &&
                                    pad.agencies.some( agency => agency.id === valueFilter )
                                )
                            )
                            ||
                            res['launches'].filter( (launch: Launch) =>
                                launch.rocket.agencies &&
                                launch.rocket.agencies.some( agency =>
                                    agency.id === valueFilter)
                            )



                        ),
                        // tap (res => { this.launches = res; console.log('Trace 1', valueFilter, res); } )
                    );

            }

            case 2: { // Mission Filter

                return this._http.get(this._url + '/assets/data/launches.json')
                    .pipe(
                        map( (res: any): Launch[] =>
                            res['launches'].filter( (launch: Launch) => launch.missions.find(mission => mission.type === valueFilter) )
                        ),
                        tap (res => this.launches = res)
                    );
            }
            default: {
                break;
          }
        }
    }

}
