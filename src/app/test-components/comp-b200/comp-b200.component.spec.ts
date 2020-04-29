import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB200Component } from './comp-b200.component';

describe('CompB200Component', () => {
  let component: CompB200Component;
  let fixture: ComponentFixture<CompB200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
