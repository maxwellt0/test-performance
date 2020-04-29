import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB181Component } from './comp-b181.component';

describe('CompB181Component', () => {
  let component: CompB181Component;
  let fixture: ComponentFixture<CompB181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
