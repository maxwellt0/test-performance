import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB24Component } from './comp-b24.component';

describe('CompB24Component', () => {
  let component: CompB24Component;
  let fixture: ComponentFixture<CompB24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
