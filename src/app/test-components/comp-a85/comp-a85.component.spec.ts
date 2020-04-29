import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA85Component } from './comp-a85.component';

describe('CompA85Component', () => {
  let component: CompA85Component;
  let fixture: ComponentFixture<CompA85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
