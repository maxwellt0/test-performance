import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB284Component } from './comp-b284.component';

describe('CompB284Component', () => {
  let component: CompB284Component;
  let fixture: ComponentFixture<CompB284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
