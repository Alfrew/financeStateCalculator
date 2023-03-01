import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtInsightsComponent } from './debt-insights.component';

describe('DebtInsightsComponent', () => {
  let component: DebtInsightsComponent;
  let fixture: ComponentFixture<DebtInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
