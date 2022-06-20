import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosHuertosComponent } from './nuestros-huertos.component';

describe('NuestrosHuertosComponent', () => {
  let component: NuestrosHuertosComponent;
  let fixture: ComponentFixture<NuestrosHuertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosHuertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosHuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
