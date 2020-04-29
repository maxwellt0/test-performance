import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB270Component } from './comp-b270.component';

describe('CompB270Component', () => {
  let component: CompB270Component;
  let fixture: ComponentFixture<CompB270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
