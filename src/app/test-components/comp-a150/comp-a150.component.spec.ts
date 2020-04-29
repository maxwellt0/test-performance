import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA150Component } from './comp-a150.component';

describe('CompA150Component', () => {
  let component: CompA150Component;
  let fixture: ComponentFixture<CompA150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
