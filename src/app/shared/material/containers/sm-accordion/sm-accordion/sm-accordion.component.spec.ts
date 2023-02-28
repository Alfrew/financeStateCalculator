import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAccordionComponent } from './sm-accordion.component';

describe('SmAccordionComponent', () => {
  let component: SmAccordionComponent;
  let fixture: ComponentFixture<SmAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
