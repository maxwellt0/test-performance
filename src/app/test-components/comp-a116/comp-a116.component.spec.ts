import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA116Component } from './comp-a116.component';

describe('CompA116Component', () => {
  let component: CompA116Component;
  let fixture: ComponentFixture<CompA116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
