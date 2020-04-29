import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA254Component } from './comp-a254.component';

describe('CompA254Component', () => {
  let component: CompA254Component;
  let fixture: ComponentFixture<CompA254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
