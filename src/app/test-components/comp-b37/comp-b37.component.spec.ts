import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB37Component } from './comp-b37.component';

describe('CompB37Component', () => {
  let component: CompB37Component;
  let fixture: ComponentFixture<CompB37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
