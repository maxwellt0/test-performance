import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA15Component } from './comp-a15.component';

describe('CompA15Component', () => {
  let component: CompA15Component;
  let fixture: ComponentFixture<CompA15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
