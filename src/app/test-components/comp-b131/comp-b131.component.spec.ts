import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB131Component } from './comp-b131.component';

describe('CompB131Component', () => {
  let component: CompB131Component;
  let fixture: ComponentFixture<CompB131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
