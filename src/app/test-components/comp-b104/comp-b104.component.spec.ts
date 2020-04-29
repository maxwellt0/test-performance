import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB104Component } from './comp-b104.component';

describe('CompB104Component', () => {
  let component: CompB104Component;
  let fixture: ComponentFixture<CompB104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
