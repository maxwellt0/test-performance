import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA109Component } from './comp-a109.component';

describe('CompA109Component', () => {
  let component: CompA109Component;
  let fixture: ComponentFixture<CompA109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
