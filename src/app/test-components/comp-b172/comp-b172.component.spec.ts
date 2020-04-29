import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB172Component } from './comp-b172.component';

describe('CompB172Component', () => {
  let component: CompB172Component;
  let fixture: ComponentFixture<CompB172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
