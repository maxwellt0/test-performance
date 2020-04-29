import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB235Component } from './comp-b235.component';

describe('CompB235Component', () => {
  let component: CompB235Component;
  let fixture: ComponentFixture<CompB235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
