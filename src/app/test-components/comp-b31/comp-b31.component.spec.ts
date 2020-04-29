import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB31Component } from './comp-b31.component';

describe('CompB31Component', () => {
  let component: CompB31Component;
  let fixture: ComponentFixture<CompB31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
