import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmStepperComponent } from "./sm-stepper.component";

describe("SmStepperComponent", () => {
  let component: SmStepperComponent;
  let fixture: ComponentFixture<SmStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
