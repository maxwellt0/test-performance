import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA104Component } from './comp-a104.component';

describe('CompA104Component', () => {
  let component: CompA104Component;
  let fixture: ComponentFixture<CompA104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
