import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB99Component } from './comp-b99.component';

describe('CompB99Component', () => {
  let component: CompB99Component;
  let fixture: ComponentFixture<CompB99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
