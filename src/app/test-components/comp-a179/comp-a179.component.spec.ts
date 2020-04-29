import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA179Component } from './comp-a179.component';

describe('CompA179Component', () => {
  let component: CompA179Component;
  let fixture: ComponentFixture<CompA179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
