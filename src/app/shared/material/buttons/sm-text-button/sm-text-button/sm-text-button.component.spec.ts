import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmTextButtonComponent } from "./sm-text-button.component";

describe("SmTextButtonComponent", () => {
  let component: SmTextButtonComponent;
  let fixture: ComponentFixture<SmTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmTextButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
