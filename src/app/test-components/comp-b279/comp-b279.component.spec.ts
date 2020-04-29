import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB279Component } from './comp-b279.component';

describe('CompB279Component', () => {
  let component: CompB279Component;
  let fixture: ComponentFixture<CompB279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
