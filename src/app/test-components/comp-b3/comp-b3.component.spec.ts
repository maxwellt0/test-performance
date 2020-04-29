import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB3Component } from './comp-b3.component';

describe('CompB3Component', () => {
  let component: CompB3Component;
  let fixture: ComponentFixture<CompB3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
