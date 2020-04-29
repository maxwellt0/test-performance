import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA5Component } from './comp-a5.component';

describe('CompA5Component', () => {
  let component: CompA5Component;
  let fixture: ComponentFixture<CompA5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
