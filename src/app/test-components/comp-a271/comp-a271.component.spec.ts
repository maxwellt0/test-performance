import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA271Component } from './comp-a271.component';

describe('CompA271Component', () => {
  let component: CompA271Component;
  let fixture: ComponentFixture<CompA271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
