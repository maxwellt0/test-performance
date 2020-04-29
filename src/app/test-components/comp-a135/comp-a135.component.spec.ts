import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA135Component } from './comp-a135.component';

describe('CompA135Component', () => {
  let component: CompA135Component;
  let fixture: ComponentFixture<CompA135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
