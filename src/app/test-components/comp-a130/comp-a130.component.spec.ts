import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA130Component } from './comp-a130.component';

describe('CompA130Component', () => {
  let component: CompA130Component;
  let fixture: ComponentFixture<CompA130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
