import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB228Component } from './comp-b228.component';

describe('CompB228Component', () => {
  let component: CompB228Component;
  let fixture: ComponentFixture<CompB228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
