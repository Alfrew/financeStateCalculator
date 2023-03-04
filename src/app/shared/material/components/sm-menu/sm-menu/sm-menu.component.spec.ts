import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmMenuComponent } from './sm-menu.component';

describe('SmMenuComponent', () => {
  let component: SmMenuComponent;
  let fixture: ComponentFixture<SmMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
