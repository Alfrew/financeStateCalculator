import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrioritiesInsightsComponent } from "./priorities-insights.component";

describe("PrioritiesInsightsComponent", () => {
  let component: PrioritiesInsightsComponent;
  let fixture: ComponentFixture<PrioritiesInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritiesInsightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrioritiesInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
