import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA175Component } from './comp-a175.component';

describe('CompA175Component', () => {
  let component: CompA175Component;
  let fixture: ComponentFixture<CompA175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
