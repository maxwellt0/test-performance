import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB286Component } from './comp-b286.component';

describe('CompB286Component', () => {
  let component: CompB286Component;
  let fixture: ComponentFixture<CompB286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
