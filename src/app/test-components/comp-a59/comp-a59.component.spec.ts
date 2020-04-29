import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA59Component } from './comp-a59.component';

describe('CompA59Component', () => {
  let component: CompA59Component;
  let fixture: ComponentFixture<CompA59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
