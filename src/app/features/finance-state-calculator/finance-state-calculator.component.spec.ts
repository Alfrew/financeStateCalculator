import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStateCalculatorComponent } from './finance-state-calculator.component';

describe('FinanceStateCalculatorComponent', () => {
  let component: FinanceStateCalculatorComponent;
  let fixture: ComponentFixture<FinanceStateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceStateCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceStateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
