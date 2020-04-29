import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA283Component } from './comp-a283.component';

describe('CompA283Component', () => {
  let component: CompA283Component;
  let fixture: ComponentFixture<CompA283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
