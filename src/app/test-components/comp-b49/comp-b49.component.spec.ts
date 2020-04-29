import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB49Component } from './comp-b49.component';

describe('CompB49Component', () => {
  let component: CompB49Component;
  let fixture: ComponentFixture<CompB49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
