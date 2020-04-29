import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA140Component } from './comp-a140.component';

describe('CompA140Component', () => {
  let component: CompA140Component;
  let fixture: ComponentFixture<CompA140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
