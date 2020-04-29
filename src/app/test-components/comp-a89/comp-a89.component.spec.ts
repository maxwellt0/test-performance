import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA89Component } from './comp-a89.component';

describe('CompA89Component', () => {
  let component: CompA89Component;
  let fixture: ComponentFixture<CompA89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
