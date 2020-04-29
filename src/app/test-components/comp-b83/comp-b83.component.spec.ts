import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB83Component } from './comp-b83.component';

describe('CompB83Component', () => {
  let component: CompB83Component;
  let fixture: ComponentFixture<CompB83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
