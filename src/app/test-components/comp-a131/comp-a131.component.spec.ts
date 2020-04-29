import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA131Component } from './comp-a131.component';

describe('CompA131Component', () => {
  let component: CompA131Component;
  let fixture: ComponentFixture<CompA131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
