import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA146Component } from './comp-a146.component';

describe('CompA146Component', () => {
  let component: CompA146Component;
  let fixture: ComponentFixture<CompA146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
