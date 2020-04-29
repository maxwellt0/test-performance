import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA102Component } from './comp-a102.component';

describe('CompA102Component', () => {
  let component: CompA102Component;
  let fixture: ComponentFixture<CompA102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
