import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA56Component } from './comp-a56.component';

describe('CompA56Component', () => {
  let component: CompA56Component;
  let fixture: ComponentFixture<CompA56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
