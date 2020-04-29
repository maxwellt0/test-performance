import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB223Component } from './comp-b223.component';

describe('CompB223Component', () => {
  let component: CompB223Component;
  let fixture: ComponentFixture<CompB223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
