import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA275Component } from './comp-a275.component';

describe('CompA275Component', () => {
  let component: CompA275Component;
  let fixture: ComponentFixture<CompA275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
