import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB102Component } from './comp-b102.component';

describe('CompB102Component', () => {
  let component: CompB102Component;
  let fixture: ComponentFixture<CompB102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
