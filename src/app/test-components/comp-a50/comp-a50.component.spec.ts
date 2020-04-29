import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA50Component } from './comp-a50.component';

describe('CompA50Component', () => {
  let component: CompA50Component;
  let fixture: ComponentFixture<CompA50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
