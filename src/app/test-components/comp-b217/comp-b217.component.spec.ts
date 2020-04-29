import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB217Component } from './comp-b217.component';

describe('CompB217Component', () => {
  let component: CompB217Component;
  let fixture: ComponentFixture<CompB217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
