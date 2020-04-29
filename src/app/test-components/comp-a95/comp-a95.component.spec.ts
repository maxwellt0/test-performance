import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA95Component } from './comp-a95.component';

describe('CompA95Component', () => {
  let component: CompA95Component;
  let fixture: ComponentFixture<CompA95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
