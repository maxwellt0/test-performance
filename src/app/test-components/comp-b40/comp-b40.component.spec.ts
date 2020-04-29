import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB40Component } from './comp-b40.component';

describe('CompB40Component', () => {
  let component: CompB40Component;
  let fixture: ComponentFixture<CompB40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
