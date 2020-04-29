import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB266Component } from './comp-b266.component';

describe('CompB266Component', () => {
  let component: CompB266Component;
  let fixture: ComponentFixture<CompB266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
