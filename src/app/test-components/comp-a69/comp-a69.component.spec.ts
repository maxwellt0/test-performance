import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA69Component } from './comp-a69.component';

describe('CompA69Component', () => {
  let component: CompA69Component;
  let fixture: ComponentFixture<CompA69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
