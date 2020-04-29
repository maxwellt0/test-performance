import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB76Component } from './comp-b76.component';

describe('CompB76Component', () => {
  let component: CompB76Component;
  let fixture: ComponentFixture<CompB76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
