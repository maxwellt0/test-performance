import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA113Component } from './comp-a113.component';

describe('CompA113Component', () => {
  let component: CompA113Component;
  let fixture: ComponentFixture<CompA113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
