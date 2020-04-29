import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB91Component } from './comp-b91.component';

describe('CompB91Component', () => {
  let component: CompB91Component;
  let fixture: ComponentFixture<CompB91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
