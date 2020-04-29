import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB66Component } from './comp-b66.component';

describe('CompB66Component', () => {
  let component: CompB66Component;
  let fixture: ComponentFixture<CompB66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
