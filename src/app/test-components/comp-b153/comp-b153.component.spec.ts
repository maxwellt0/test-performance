import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB153Component } from './comp-b153.component';

describe('CompB153Component', () => {
  let component: CompB153Component;
  let fixture: ComponentFixture<CompB153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
