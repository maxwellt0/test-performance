import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB4Component } from './comp-b4.component';

describe('CompB4Component', () => {
  let component: CompB4Component;
  let fixture: ComponentFixture<CompB4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
