import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmHollowButtonComponent } from "./sm-hollow-button.component";

describe("SmHollowButtonComponent", () => {
  let component: SmHollowButtonComponent;
  let fixture: ComponentFixture<SmHollowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmHollowButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmHollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
