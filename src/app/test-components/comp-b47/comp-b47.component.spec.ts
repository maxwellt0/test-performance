import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB47Component } from './comp-b47.component';

describe('CompB47Component', () => {
  let component: CompB47Component;
  let fixture: ComponentFixture<CompB47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
