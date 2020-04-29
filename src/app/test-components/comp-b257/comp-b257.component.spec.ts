import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB257Component } from './comp-b257.component';

describe('CompB257Component', () => {
  let component: CompB257Component;
  let fixture: ComponentFixture<CompB257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
