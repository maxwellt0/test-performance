import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA285Component } from './comp-a285.component';

describe('CompA285Component', () => {
  let component: CompA285Component;
  let fixture: ComponentFixture<CompA285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
