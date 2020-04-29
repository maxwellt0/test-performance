import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA107Component } from './comp-a107.component';

describe('CompA107Component', () => {
  let component: CompA107Component;
  let fixture: ComponentFixture<CompA107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
