import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA298Component } from './comp-a298.component';

describe('CompA298Component', () => {
  let component: CompA298Component;
  let fixture: ComponentFixture<CompA298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
