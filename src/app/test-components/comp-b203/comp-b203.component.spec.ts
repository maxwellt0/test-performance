import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB203Component } from './comp-b203.component';

describe('CompB203Component', () => {
  let component: CompB203Component;
  let fixture: ComponentFixture<CompB203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
