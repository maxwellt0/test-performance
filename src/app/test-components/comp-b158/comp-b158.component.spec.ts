import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB158Component } from './comp-b158.component';

describe('CompB158Component', () => {
  let component: CompB158Component;
  let fixture: ComponentFixture<CompB158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
