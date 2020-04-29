import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB114Component } from './comp-b114.component';

describe('CompB114Component', () => {
  let component: CompB114Component;
  let fixture: ComponentFixture<CompB114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
