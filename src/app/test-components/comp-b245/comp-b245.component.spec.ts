import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB245Component } from './comp-b245.component';

describe('CompB245Component', () => {
  let component: CompB245Component;
  let fixture: ComponentFixture<CompB245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
