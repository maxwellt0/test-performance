import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA78Component } from './comp-a78.component';

describe('CompA78Component', () => {
  let component: CompA78Component;
  let fixture: ComponentFixture<CompA78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
