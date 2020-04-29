import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB176Component } from './comp-b176.component';

describe('CompB176Component', () => {
  let component: CompB176Component;
  let fixture: ComponentFixture<CompB176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
