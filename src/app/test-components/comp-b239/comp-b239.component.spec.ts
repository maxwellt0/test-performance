import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB239Component } from './comp-b239.component';

describe('CompB239Component', () => {
  let component: CompB239Component;
  let fixture: ComponentFixture<CompB239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
