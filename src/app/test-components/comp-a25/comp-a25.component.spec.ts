import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA25Component } from './comp-a25.component';

describe('CompA25Component', () => {
  let component: CompA25Component;
  let fixture: ComponentFixture<CompA25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
