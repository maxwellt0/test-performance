import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB93Component } from './comp-b93.component';

describe('CompB93Component', () => {
  let component: CompB93Component;
  let fixture: ComponentFixture<CompB93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
