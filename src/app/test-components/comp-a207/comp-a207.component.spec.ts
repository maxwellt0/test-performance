import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA207Component } from './comp-a207.component';

describe('CompA207Component', () => {
  let component: CompA207Component;
  let fixture: ComponentFixture<CompA207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
