import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA167Component } from './comp-a167.component';

describe('CompA167Component', () => {
  let component: CompA167Component;
  let fixture: ComponentFixture<CompA167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
