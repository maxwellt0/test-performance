import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB233Component } from './comp-b233.component';

describe('CompB233Component', () => {
  let component: CompB233Component;
  let fixture: ComponentFixture<CompB233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
