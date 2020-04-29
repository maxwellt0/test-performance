import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA201Component } from './comp-a201.component';

describe('CompA201Component', () => {
  let component: CompA201Component;
  let fixture: ComponentFixture<CompA201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
