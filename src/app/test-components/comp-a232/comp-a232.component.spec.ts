import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA232Component } from './comp-a232.component';

describe('CompA232Component', () => {
  let component: CompA232Component;
  let fixture: ComponentFixture<CompA232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
