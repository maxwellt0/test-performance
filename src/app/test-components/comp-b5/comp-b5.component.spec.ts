import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB5Component } from './comp-b5.component';

describe('CompB5Component', () => {
  let component: CompB5Component;
  let fixture: ComponentFixture<CompB5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
