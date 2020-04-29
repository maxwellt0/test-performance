import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB79Component } from './comp-b79.component';

describe('CompB79Component', () => {
  let component: CompB79Component;
  let fixture: ComponentFixture<CompB79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
