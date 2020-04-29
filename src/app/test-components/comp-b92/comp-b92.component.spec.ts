import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB92Component } from './comp-b92.component';

describe('CompB92Component', () => {
  let component: CompB92Component;
  let fixture: ComponentFixture<CompB92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
