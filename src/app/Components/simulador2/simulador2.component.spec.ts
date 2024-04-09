import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simulador2Component } from './simulador2.component';

describe('Simulador2Component', () => {
  let component: Simulador2Component;
  let fixture: ComponentFixture<Simulador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Simulador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Simulador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
