import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB242Component } from './comp-b242.component';

describe('CompB242Component', () => {
  let component: CompB242Component;
  let fixture: ComponentFixture<CompB242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
