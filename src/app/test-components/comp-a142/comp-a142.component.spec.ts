import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA142Component } from './comp-a142.component';

describe('CompA142Component', () => {
  let component: CompA142Component;
  let fixture: ComponentFixture<CompA142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
