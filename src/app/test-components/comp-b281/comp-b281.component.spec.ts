import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB281Component } from './comp-b281.component';

describe('CompB281Component', () => {
  let component: CompB281Component;
  let fixture: ComponentFixture<CompB281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
