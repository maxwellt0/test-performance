import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB30Component } from './comp-b30.component';

describe('CompB30Component', () => {
  let component: CompB30Component;
  let fixture: ComponentFixture<CompB30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
