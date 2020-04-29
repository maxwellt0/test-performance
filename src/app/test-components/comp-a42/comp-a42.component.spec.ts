import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA42Component } from './comp-a42.component';

describe('CompA42Component', () => {
  let component: CompA42Component;
  let fixture: ComponentFixture<CompA42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
