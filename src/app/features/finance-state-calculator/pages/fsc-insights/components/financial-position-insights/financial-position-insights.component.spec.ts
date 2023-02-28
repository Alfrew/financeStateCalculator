import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPositionInsightsComponent } from './financial-position-insights.component';

describe('FinancialPositionInsightsComponent', () => {
  let component: FinancialPositionInsightsComponent;
  let fixture: ComponentFixture<FinancialPositionInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialPositionInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialPositionInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
