import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simulador3Component } from './simulador3.component';

describe('Simulador3Component', () => {
  let component: Simulador3Component;
  let fixture: ComponentFixture<Simulador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Simulador3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Simulador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
