import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB298Component } from './comp-b298.component';

describe('CompB298Component', () => {
  let component: CompB298Component;
  let fixture: ComponentFixture<CompB298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
