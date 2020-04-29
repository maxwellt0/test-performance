import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB167Component } from './comp-b167.component';

describe('CompB167Component', () => {
  let component: CompB167Component;
  let fixture: ComponentFixture<CompB167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
