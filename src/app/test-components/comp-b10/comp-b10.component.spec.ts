import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB10Component } from './comp-b10.component';

describe('CompB10Component', () => {
  let component: CompB10Component;
  let fixture: ComponentFixture<CompB10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
