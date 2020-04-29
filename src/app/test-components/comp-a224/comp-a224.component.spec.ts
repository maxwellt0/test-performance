import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA224Component } from './comp-a224.component';

describe('CompA224Component', () => {
  let component: CompA224Component;
  let fixture: ComponentFixture<CompA224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
