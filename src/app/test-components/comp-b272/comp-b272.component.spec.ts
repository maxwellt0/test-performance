import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB272Component } from './comp-b272.component';

describe('CompB272Component', () => {
  let component: CompB272Component;
  let fixture: ComponentFixture<CompB272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
