import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB19Component } from './comp-b19.component';

describe('CompB19Component', () => {
  let component: CompB19Component;
  let fixture: ComponentFixture<CompB19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
