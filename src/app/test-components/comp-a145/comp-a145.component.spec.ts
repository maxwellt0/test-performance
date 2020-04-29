import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA145Component } from './comp-a145.component';

describe('CompA145Component', () => {
  let component: CompA145Component;
  let fixture: ComponentFixture<CompA145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
