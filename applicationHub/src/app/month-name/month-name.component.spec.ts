import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthNameComponent } from './month-name.component';

describe('MonthNameComponent', () => {
  let component: MonthNameComponent;
  let fixture: ComponentFixture<MonthNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
