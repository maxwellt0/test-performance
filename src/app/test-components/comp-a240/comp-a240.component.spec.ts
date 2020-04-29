import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA240Component } from './comp-a240.component';

describe('CompA240Component', () => {
  let component: CompA240Component;
  let fixture: ComponentFixture<CompA240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
