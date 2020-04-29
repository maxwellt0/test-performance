import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB73Component } from './comp-b73.component';

describe('CompB73Component', () => {
  let component: CompB73Component;
  let fixture: ComponentFixture<CompB73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
