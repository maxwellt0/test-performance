import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB204Component } from './comp-b204.component';

describe('CompB204Component', () => {
  let component: CompB204Component;
  let fixture: ComponentFixture<CompB204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
