import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA54Component } from './comp-a54.component';

describe('CompA54Component', () => {
  let component: CompA54Component;
  let fixture: ComponentFixture<CompA54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
