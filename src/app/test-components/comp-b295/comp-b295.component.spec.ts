import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB295Component } from './comp-b295.component';

describe('CompB295Component', () => {
  let component: CompB295Component;
  let fixture: ComponentFixture<CompB295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
