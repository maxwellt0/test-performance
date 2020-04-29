import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA195Component } from './comp-a195.component';

describe('CompA195Component', () => {
  let component: CompA195Component;
  let fixture: ComponentFixture<CompA195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
