import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingChartComponent } from './shopping-chart.component';

describe('ShoppingChartComponent', () => {
  let component: ShoppingChartComponent;
  let fixture: ComponentFixture<ShoppingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
