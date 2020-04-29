import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA185Component } from './comp-a185.component';

describe('CompA185Component', () => {
  let component: CompA185Component;
  let fixture: ComponentFixture<CompA185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
