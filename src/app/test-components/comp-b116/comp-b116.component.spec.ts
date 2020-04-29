import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB116Component } from './comp-b116.component';

describe('CompB116Component', () => {
  let component: CompB116Component;
  let fixture: ComponentFixture<CompB116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
