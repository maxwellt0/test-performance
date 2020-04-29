import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA188Component } from './comp-a188.component';

describe('CompA188Component', () => {
  let component: CompA188Component;
  let fixture: ComponentFixture<CompA188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
