import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA200Component } from './comp-a200.component';

describe('CompA200Component', () => {
  let component: CompA200Component;
  let fixture: ComponentFixture<CompA200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
