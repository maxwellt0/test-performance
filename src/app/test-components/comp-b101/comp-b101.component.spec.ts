import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB101Component } from './comp-b101.component';

describe('CompB101Component', () => {
  let component: CompB101Component;
  let fixture: ComponentFixture<CompB101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
