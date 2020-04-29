import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB188Component } from './comp-b188.component';

describe('CompB188Component', () => {
  let component: CompB188Component;
  let fixture: ComponentFixture<CompB188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
