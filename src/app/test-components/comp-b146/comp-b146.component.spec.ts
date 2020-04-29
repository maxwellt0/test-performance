import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB146Component } from './comp-b146.component';

describe('CompB146Component', () => {
  let component: CompB146Component;
  let fixture: ComponentFixture<CompB146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
