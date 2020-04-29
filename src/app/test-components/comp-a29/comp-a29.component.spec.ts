import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA29Component } from './comp-a29.component';

describe('CompA29Component', () => {
  let component: CompA29Component;
  let fixture: ComponentFixture<CompA29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
