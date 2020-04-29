import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA61Component } from './comp-a61.component';

describe('CompA61Component', () => {
  let component: CompA61Component;
  let fixture: ComponentFixture<CompA61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
