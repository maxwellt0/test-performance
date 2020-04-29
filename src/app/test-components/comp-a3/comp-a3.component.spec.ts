import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA3Component } from './comp-a3.component';

describe('CompA3Component', () => {
  let component: CompA3Component;
  let fixture: ComponentFixture<CompA3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
