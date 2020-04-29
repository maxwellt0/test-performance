import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB260Component } from './comp-b260.component';

describe('CompB260Component', () => {
  let component: CompB260Component;
  let fixture: ComponentFixture<CompB260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
