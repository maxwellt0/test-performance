import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB243Component } from './comp-b243.component';

describe('CompB243Component', () => {
  let component: CompB243Component;
  let fixture: ComponentFixture<CompB243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
