import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB41Component } from './comp-b41.component';

describe('CompB41Component', () => {
  let component: CompB41Component;
  let fixture: ComponentFixture<CompB41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
