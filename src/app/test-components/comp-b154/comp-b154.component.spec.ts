import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB154Component } from './comp-b154.component';

describe('CompB154Component', () => {
  let component: CompB154Component;
  let fixture: ComponentFixture<CompB154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
