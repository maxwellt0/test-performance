import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB278Component } from './comp-b278.component';

describe('CompB278Component', () => {
  let component: CompB278Component;
  let fixture: ComponentFixture<CompB278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
