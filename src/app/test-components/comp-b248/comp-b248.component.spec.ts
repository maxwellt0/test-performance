import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB248Component } from './comp-b248.component';

describe('CompB248Component', () => {
  let component: CompB248Component;
  let fixture: ComponentFixture<CompB248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
