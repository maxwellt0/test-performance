import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA191Component } from './comp-a191.component';

describe('CompA191Component', () => {
  let component: CompA191Component;
  let fixture: ComponentFixture<CompA191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
