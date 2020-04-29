import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA52Component } from './comp-a52.component';

describe('CompA52Component', () => {
  let component: CompA52Component;
  let fixture: ComponentFixture<CompA52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
