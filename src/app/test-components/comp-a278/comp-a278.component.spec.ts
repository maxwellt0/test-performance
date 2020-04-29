import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA278Component } from './comp-a278.component';

describe('CompA278Component', () => {
  let component: CompA278Component;
  let fixture: ComponentFixture<CompA278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
