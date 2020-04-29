import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB241Component } from './comp-b241.component';

describe('CompB241Component', () => {
  let component: CompB241Component;
  let fixture: ComponentFixture<CompB241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
