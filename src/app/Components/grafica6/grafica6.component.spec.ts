import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica6Component } from './grafica6.component';

describe('Grafica6Component', () => {
  let component: Grafica6Component;
  let fixture: ComponentFixture<Grafica6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafica6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafica6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
