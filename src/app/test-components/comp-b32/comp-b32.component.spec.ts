import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB32Component } from './comp-b32.component';

describe('CompB32Component', () => {
  let component: CompB32Component;
  let fixture: ComponentFixture<CompB32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
