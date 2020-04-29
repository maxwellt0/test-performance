import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA16Component } from './comp-a16.component';

describe('CompA16Component', () => {
  let component: CompA16Component;
  let fixture: ComponentFixture<CompA16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
