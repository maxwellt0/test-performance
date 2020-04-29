import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB263Component } from './comp-b263.component';

describe('CompB263Component', () => {
  let component: CompB263Component;
  let fixture: ComponentFixture<CompB263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
