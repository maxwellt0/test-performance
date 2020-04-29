import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB212Component } from './comp-b212.component';

describe('CompB212Component', () => {
  let component: CompB212Component;
  let fixture: ComponentFixture<CompB212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
