import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB52Component } from './comp-b52.component';

describe('CompB52Component', () => {
  let component: CompB52Component;
  let fixture: ComponentFixture<CompB52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
