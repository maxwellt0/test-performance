import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB207Component } from './comp-b207.component';

describe('CompB207Component', () => {
  let component: CompB207Component;
  let fixture: ComponentFixture<CompB207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
