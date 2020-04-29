import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA280Component } from './comp-a280.component';

describe('CompA280Component', () => {
  let component: CompA280Component;
  let fixture: ComponentFixture<CompA280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
