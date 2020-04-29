import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB74Component } from './comp-b74.component';

describe('CompB74Component', () => {
  let component: CompB74Component;
  let fixture: ComponentFixture<CompB74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
