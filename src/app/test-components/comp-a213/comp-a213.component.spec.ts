import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA213Component } from './comp-a213.component';

describe('CompA213Component', () => {
  let component: CompA213Component;
  let fixture: ComponentFixture<CompA213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
