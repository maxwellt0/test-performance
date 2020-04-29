import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB136Component } from './comp-b136.component';

describe('CompB136Component', () => {
  let component: CompB136Component;
  let fixture: ComponentFixture<CompB136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
