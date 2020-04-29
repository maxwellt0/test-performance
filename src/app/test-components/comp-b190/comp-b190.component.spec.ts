import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB190Component } from './comp-b190.component';

describe('CompB190Component', () => {
  let component: CompB190Component;
  let fixture: ComponentFixture<CompB190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
