import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB86Component } from './comp-b86.component';

describe('CompB86Component', () => {
  let component: CompB86Component;
  let fixture: ComponentFixture<CompB86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
