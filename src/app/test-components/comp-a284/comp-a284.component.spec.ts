import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA284Component } from './comp-a284.component';

describe('CompA284Component', () => {
  let component: CompA284Component;
  let fixture: ComponentFixture<CompA284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
