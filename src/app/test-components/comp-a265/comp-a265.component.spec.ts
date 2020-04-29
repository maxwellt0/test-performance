import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA265Component } from './comp-a265.component';

describe('CompA265Component', () => {
  let component: CompA265Component;
  let fixture: ComponentFixture<CompA265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
