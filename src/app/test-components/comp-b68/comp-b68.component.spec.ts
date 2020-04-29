import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB68Component } from './comp-b68.component';

describe('CompB68Component', () => {
  let component: CompB68Component;
  let fixture: ComponentFixture<CompB68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
