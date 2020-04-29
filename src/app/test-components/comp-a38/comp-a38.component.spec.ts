import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA38Component } from './comp-a38.component';

describe('CompA38Component', () => {
  let component: CompA38Component;
  let fixture: ComponentFixture<CompA38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
