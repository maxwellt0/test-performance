import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB226Component } from './comp-b226.component';

describe('CompB226Component', () => {
  let component: CompB226Component;
  let fixture: ComponentFixture<CompB226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
