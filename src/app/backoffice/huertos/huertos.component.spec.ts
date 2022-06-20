import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertosComponent } from './huertos.component';

describe('HuertosComponent', () => {
  let component: HuertosComponent;
  let fixture: ComponentFixture<HuertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
