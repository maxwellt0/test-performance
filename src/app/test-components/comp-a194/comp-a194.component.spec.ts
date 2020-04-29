import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA194Component } from './comp-a194.component';

describe('CompA194Component', () => {
  let component: CompA194Component;
  let fixture: ComponentFixture<CompA194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
