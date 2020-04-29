import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB169Component } from './comp-b169.component';

describe('CompB169Component', () => {
  let component: CompB169Component;
  let fixture: ComponentFixture<CompB169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
