import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB183Component } from './comp-b183.component';

describe('CompB183Component', () => {
  let component: CompB183Component;
  let fixture: ComponentFixture<CompB183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
