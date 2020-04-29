import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA170Component } from './comp-a170.component';

describe('CompA170Component', () => {
  let component: CompA170Component;
  let fixture: ComponentFixture<CompA170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
