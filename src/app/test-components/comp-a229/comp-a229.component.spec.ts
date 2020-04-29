import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA229Component } from './comp-a229.component';

describe('CompA229Component', () => {
  let component: CompA229Component;
  let fixture: ComponentFixture<CompA229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
