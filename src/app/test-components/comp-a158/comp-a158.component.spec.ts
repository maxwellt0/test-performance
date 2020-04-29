import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA158Component } from './comp-a158.component';

describe('CompA158Component', () => {
  let component: CompA158Component;
  let fixture: ComponentFixture<CompA158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
