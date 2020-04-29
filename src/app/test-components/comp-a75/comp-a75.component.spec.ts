import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA75Component } from './comp-a75.component';

describe('CompA75Component', () => {
  let component: CompA75Component;
  let fixture: ComponentFixture<CompA75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
