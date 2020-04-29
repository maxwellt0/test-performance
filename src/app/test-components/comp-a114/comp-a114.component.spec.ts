import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA114Component } from './comp-a114.component';

describe('CompA114Component', () => {
  let component: CompA114Component;
  let fixture: ComponentFixture<CompA114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
