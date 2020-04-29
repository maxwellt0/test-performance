import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB84Component } from './comp-b84.component';

describe('CompB84Component', () => {
  let component: CompB84Component;
  let fixture: ComponentFixture<CompB84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
