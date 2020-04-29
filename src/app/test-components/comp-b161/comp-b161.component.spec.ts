import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB161Component } from './comp-b161.component';

describe('CompB161Component', () => {
  let component: CompB161Component;
  let fixture: ComponentFixture<CompB161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
