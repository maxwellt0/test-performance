import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA32Component } from './comp-a32.component';

describe('CompA32Component', () => {
  let component: CompA32Component;
  let fixture: ComponentFixture<CompA32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
