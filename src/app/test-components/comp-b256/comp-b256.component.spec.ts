import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB256Component } from './comp-b256.component';

describe('CompB256Component', () => {
  let component: CompB256Component;
  let fixture: ComponentFixture<CompB256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
