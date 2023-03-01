import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInsightsComponent } from './investment-insights.component';

describe('InvestmentInsightsComponent', () => {
  let component: InvestmentInsightsComponent;
  let fixture: ComponentFixture<InvestmentInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
