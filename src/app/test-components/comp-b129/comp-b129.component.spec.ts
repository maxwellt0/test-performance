import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB129Component } from './comp-b129.component';

describe('CompB129Component', () => {
  let component: CompB129Component;
  let fixture: ComponentFixture<CompB129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
