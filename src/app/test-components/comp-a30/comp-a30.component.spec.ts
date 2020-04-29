import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA30Component } from './comp-a30.component';

describe('CompA30Component', () => {
  let component: CompA30Component;
  let fixture: ComponentFixture<CompA30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
