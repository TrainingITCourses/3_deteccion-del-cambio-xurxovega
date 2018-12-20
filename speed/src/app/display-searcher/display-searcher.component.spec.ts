import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearcherComponent } from './display-searcher.component';

describe('DisplaySearcherComponent', () => {
  let component: DisplaySearcherComponent;
  let fixture: ComponentFixture<DisplaySearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
