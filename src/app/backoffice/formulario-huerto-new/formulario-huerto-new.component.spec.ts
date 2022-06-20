import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHuertoNewComponent } from './formulario-huerto-new.component';

describe('FormularioHuertoNewComponent', () => {
  let component: FormularioHuertoNewComponent;
  let fixture: ComponentFixture<FormularioHuertoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHuertoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHuertoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
