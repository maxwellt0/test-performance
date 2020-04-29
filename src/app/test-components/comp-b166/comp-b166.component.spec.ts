import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB166Component } from './comp-b166.component';

describe('CompB166Component', () => {
  let component: CompB166Component;
  let fixture: ComponentFixture<CompB166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
