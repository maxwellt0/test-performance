import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB95Component } from './comp-b95.component';

describe('CompB95Component', () => {
  let component: CompB95Component;
  let fixture: ComponentFixture<CompB95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
