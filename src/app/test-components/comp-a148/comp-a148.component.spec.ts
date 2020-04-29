import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA148Component } from './comp-a148.component';

describe('CompA148Component', () => {
  let component: CompA148Component;
  let fixture: ComponentFixture<CompA148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
