import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA286Component } from './comp-a286.component';

describe('CompA286Component', () => {
  let component: CompA286Component;
  let fixture: ComponentFixture<CompA286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
