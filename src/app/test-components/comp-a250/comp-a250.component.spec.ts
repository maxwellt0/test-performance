import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA250Component } from './comp-a250.component';

describe('CompA250Component', () => {
  let component: CompA250Component;
  let fixture: ComponentFixture<CompA250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
