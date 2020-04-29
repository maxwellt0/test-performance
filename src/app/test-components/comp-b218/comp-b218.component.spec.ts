import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB218Component } from './comp-b218.component';

describe('CompB218Component', () => {
  let component: CompB218Component;
  let fixture: ComponentFixture<CompB218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
