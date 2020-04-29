import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB133Component } from './comp-b133.component';

describe('CompB133Component', () => {
  let component: CompB133Component;
  let fixture: ComponentFixture<CompB133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
