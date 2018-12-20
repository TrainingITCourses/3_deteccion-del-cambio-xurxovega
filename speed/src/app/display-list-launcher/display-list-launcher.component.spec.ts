import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListLauncherComponent } from './display-list-launcher.component';

describe('DisplayListLauncherComponent', () => {
  let component: DisplayListLauncherComponent;
  let fixture: ComponentFixture<DisplayListLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
