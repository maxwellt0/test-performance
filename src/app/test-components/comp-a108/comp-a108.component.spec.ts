import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA108Component } from './comp-a108.component';

describe('CompA108Component', () => {
  let component: CompA108Component;
  let fixture: ComponentFixture<CompA108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
