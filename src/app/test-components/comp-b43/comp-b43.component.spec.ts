import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB43Component } from './comp-b43.component';

describe('CompB43Component', () => {
  let component: CompB43Component;
  let fixture: ComponentFixture<CompB43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
