import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB251Component } from './comp-b251.component';

describe('CompB251Component', () => {
  let component: CompB251Component;
  let fixture: ComponentFixture<CompB251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
