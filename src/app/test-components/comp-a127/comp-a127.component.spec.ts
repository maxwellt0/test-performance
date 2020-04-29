import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA127Component } from './comp-a127.component';

describe('CompA127Component', () => {
  let component: CompA127Component;
  let fixture: ComponentFixture<CompA127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
