import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA111Component } from './comp-a111.component';

describe('CompA111Component', () => {
  let component: CompA111Component;
  let fixture: ComponentFixture<CompA111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
