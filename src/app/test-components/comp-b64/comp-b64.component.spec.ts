import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB64Component } from './comp-b64.component';

describe('CompB64Component', () => {
  let component: CompB64Component;
  let fixture: ComponentFixture<CompB64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
