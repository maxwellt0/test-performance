import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB72Component } from './comp-b72.component';

describe('CompB72Component', () => {
  let component: CompB72Component;
  let fixture: ComponentFixture<CompB72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
