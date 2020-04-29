import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA199Component } from './comp-a199.component';

describe('CompA199Component', () => {
  let component: CompA199Component;
  let fixture: ComponentFixture<CompA199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
