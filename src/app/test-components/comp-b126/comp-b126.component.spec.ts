import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB126Component } from './comp-b126.component';

describe('CompB126Component', () => {
  let component: CompB126Component;
  let fixture: ComponentFixture<CompB126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
