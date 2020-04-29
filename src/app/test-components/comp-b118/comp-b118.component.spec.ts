import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB118Component } from './comp-b118.component';

describe('CompB118Component', () => {
  let component: CompB118Component;
  let fixture: ComponentFixture<CompB118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
