import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB142Component } from './comp-b142.component';

describe('CompB142Component', () => {
  let component: CompB142Component;
  let fixture: ComponentFixture<CompB142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
