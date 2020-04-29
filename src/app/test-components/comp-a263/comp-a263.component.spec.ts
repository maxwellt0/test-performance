import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA263Component } from './comp-a263.component';

describe('CompA263Component', () => {
  let component: CompA263Component;
  let fixture: ComponentFixture<CompA263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
