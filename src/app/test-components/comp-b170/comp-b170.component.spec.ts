import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB170Component } from './comp-b170.component';

describe('CompB170Component', () => {
  let component: CompB170Component;
  let fixture: ComponentFixture<CompB170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
