import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB253Component } from './comp-b253.component';

describe('CompB253Component', () => {
  let component: CompB253Component;
  let fixture: ComponentFixture<CompB253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
