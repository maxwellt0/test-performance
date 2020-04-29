import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB134Component } from './comp-b134.component';

describe('CompB134Component', () => {
  let component: CompB134Component;
  let fixture: ComponentFixture<CompB134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
