import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PriorityInsightsComponent } from "./priority-insights.component";

describe("PrioritiesInsightsComponent", () => {
  let component: PriorityInsightsComponent;
  let fixture: ComponentFixture<PriorityInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriorityInsightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriorityInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
