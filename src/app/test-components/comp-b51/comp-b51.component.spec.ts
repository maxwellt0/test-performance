import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB51Component } from './comp-b51.component';

describe('CompB51Component', () => {
  let component: CompB51Component;
  let fixture: ComponentFixture<CompB51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
