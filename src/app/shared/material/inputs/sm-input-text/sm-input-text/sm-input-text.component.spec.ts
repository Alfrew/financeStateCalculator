import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmInputTextComponent } from "./sm-input-text.component";

describe("SmInputTextComponent", () => {
  let component: SmInputTextComponent;
  let fixture: ComponentFixture<SmInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
