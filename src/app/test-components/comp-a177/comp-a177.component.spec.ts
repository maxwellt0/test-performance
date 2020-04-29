import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA177Component } from './comp-a177.component';

describe('CompA177Component', () => {
  let component: CompA177Component;
  let fixture: ComponentFixture<CompA177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
