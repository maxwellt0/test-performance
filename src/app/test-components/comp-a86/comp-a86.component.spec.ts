import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA86Component } from './comp-a86.component';

describe('CompA86Component', () => {
  let component: CompA86Component;
  let fixture: ComponentFixture<CompA86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
