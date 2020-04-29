import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB77Component } from './comp-b77.component';

describe('CompB77Component', () => {
  let component: CompB77Component;
  let fixture: ComponentFixture<CompB77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
