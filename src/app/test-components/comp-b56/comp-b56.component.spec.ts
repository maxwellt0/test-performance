import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB56Component } from './comp-b56.component';

describe('CompB56Component', () => {
  let component: CompB56Component;
  let fixture: ComponentFixture<CompB56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
