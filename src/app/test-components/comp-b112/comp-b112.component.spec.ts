import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB112Component } from './comp-b112.component';

describe('CompB112Component', () => {
  let component: CompB112Component;
  let fixture: ComponentFixture<CompB112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
