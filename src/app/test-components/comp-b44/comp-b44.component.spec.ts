import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB44Component } from './comp-b44.component';

describe('CompB44Component', () => {
  let component: CompB44Component;
  let fixture: ComponentFixture<CompB44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
