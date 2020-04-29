import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA155Component } from './comp-a155.component';

describe('CompA155Component', () => {
  let component: CompA155Component;
  let fixture: ComponentFixture<CompA155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
