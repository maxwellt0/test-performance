import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA222Component } from './comp-a222.component';

describe('CompA222Component', () => {
  let component: CompA222Component;
  let fixture: ComponentFixture<CompA222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
