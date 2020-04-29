import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA246Component } from './comp-a246.component';

describe('CompA246Component', () => {
  let component: CompA246Component;
  let fixture: ComponentFixture<CompA246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
