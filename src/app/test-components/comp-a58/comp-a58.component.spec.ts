import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA58Component } from './comp-a58.component';

describe('CompA58Component', () => {
  let component: CompA58Component;
  let fixture: ComponentFixture<CompA58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
