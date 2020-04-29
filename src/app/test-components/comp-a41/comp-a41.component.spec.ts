import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA41Component } from './comp-a41.component';

describe('CompA41Component', () => {
  let component: CompA41Component;
  let fixture: ComponentFixture<CompA41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
