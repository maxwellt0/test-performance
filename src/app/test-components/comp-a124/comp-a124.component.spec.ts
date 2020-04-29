import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA124Component } from './comp-a124.component';

describe('CompA124Component', () => {
  let component: CompA124Component;
  let fixture: ComponentFixture<CompA124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
