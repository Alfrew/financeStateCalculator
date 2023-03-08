import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmNavbarComponent } from "./sm-navbar.component";

describe("SmHeaderComponent", () => {
  let component: SmNavbarComponent;
  let fixture: ComponentFixture<SmNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
