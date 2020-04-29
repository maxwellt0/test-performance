import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA296Component } from './comp-a296.component';

describe('CompA296Component', () => {
  let component: CompA296Component;
  let fixture: ComponentFixture<CompA296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
