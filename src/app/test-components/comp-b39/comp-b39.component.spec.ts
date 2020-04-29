import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB39Component } from './comp-b39.component';

describe('CompB39Component', () => {
  let component: CompB39Component;
  let fixture: ComponentFixture<CompB39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
