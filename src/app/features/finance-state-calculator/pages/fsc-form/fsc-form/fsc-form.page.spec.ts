import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FscFormPage } from "./fsc-form.page";

describe("FscFormPage", () => {
  let component: FscFormPage;
  let fixture: ComponentFixture<FscFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FscFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FscFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
