import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB94Component } from './comp-b94.component';

describe('CompB94Component', () => {
  let component: CompB94Component;
  let fixture: ComponentFixture<CompB94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB94Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
