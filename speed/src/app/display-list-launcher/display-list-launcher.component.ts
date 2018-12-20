import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-list-launcher',
  templateUrl: './display-list-launcher.component.html',
  styleUrls: ['./display-list-launcher.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayListLauncherComponent implements OnInit {

  @Input() filterLaunches: any[];
  @Input() filterCounterLaunches: any;

  constructor() { }

  ngOnInit() {
    // console.log('list-launcher component Init...');
  }
  // ngOnChanges(changes) {
  //   // console.log('changes', changes);
  // }

}
