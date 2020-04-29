import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA147Component } from './comp-a147.component';

describe('CompA147Component', () => {
  let component: CompA147Component;
  let fixture: ComponentFixture<CompA147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
