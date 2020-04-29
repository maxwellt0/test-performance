import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA290Component } from './comp-a290.component';

describe('CompA290Component', () => {
  let component: CompA290Component;
  let fixture: ComponentFixture<CompA290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
