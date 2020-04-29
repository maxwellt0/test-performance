import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB155Component } from './comp-b155.component';

describe('CompB155Component', () => {
  let component: CompB155Component;
  let fixture: ComponentFixture<CompB155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
