import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA62Component } from './comp-a62.component';

describe('CompA62Component', () => {
  let component: CompA62Component;
  let fixture: ComponentFixture<CompA62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
