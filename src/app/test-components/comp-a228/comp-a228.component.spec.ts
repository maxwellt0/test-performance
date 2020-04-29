import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA228Component } from './comp-a228.component';

describe('CompA228Component', () => {
  let component: CompA228Component;
  let fixture: ComponentFixture<CompA228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
