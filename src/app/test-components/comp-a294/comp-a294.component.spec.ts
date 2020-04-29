import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA294Component } from './comp-a294.component';

describe('CompA294Component', () => {
  let component: CompA294Component;
  let fixture: ComponentFixture<CompA294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
