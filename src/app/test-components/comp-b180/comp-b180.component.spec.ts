import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB180Component } from './comp-b180.component';

describe('CompB180Component', () => {
  let component: CompB180Component;
  let fixture: ComponentFixture<CompB180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
