import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB171Component } from './comp-b171.component';

describe('CompB171Component', () => {
  let component: CompB171Component;
  let fixture: ComponentFixture<CompB171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
