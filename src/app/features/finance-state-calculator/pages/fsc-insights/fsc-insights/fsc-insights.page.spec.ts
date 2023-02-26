import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FscInsightsPage } from './fsc-insights.page';

describe('FscInsightsPage', () => {
  let component: FscInsightsPage;
  let fixture: ComponentFixture<FscInsightsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FscInsightsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FscInsightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
