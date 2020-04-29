import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB213Component } from './comp-b213.component';

describe('CompB213Component', () => {
  let component: CompB213Component;
  let fixture: ComponentFixture<CompB213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
