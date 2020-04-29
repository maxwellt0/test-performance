import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB182Component } from './comp-b182.component';

describe('CompB182Component', () => {
  let component: CompB182Component;
  let fixture: ComponentFixture<CompB182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
