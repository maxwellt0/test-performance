import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA163Component } from './comp-a163.component';

describe('CompA163Component', () => {
  let component: CompA163Component;
  let fixture: ComponentFixture<CompA163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
