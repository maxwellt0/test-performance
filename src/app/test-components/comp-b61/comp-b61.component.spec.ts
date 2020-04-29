import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB61Component } from './comp-b61.component';

describe('CompB61Component', () => {
  let component: CompB61Component;
  let fixture: ComponentFixture<CompB61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
