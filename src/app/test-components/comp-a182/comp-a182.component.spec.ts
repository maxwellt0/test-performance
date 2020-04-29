import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA182Component } from './comp-a182.component';

describe('CompA182Component', () => {
  let component: CompA182Component;
  let fixture: ComponentFixture<CompA182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
