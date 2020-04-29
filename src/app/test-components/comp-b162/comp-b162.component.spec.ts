import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB162Component } from './comp-b162.component';

describe('CompB162Component', () => {
  let component: CompB162Component;
  let fixture: ComponentFixture<CompB162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
