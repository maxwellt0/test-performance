import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA70Component } from './comp-a70.component';

describe('CompA70Component', () => {
  let component: CompA70Component;
  let fixture: ComponentFixture<CompA70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
