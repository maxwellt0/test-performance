import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB289Component } from './comp-b289.component';

describe('CompB289Component', () => {
  let component: CompB289Component;
  let fixture: ComponentFixture<CompB289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
