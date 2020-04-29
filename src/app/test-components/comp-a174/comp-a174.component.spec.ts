import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA174Component } from './comp-a174.component';

describe('CompA174Component', () => {
  let component: CompA174Component;
  let fixture: ComponentFixture<CompA174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
