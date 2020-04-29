import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB206Component } from './comp-b206.component';

describe('CompB206Component', () => {
  let component: CompB206Component;
  let fixture: ComponentFixture<CompB206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
