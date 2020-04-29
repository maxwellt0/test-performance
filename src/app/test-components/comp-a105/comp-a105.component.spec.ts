import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA105Component } from './comp-a105.component';

describe('CompA105Component', () => {
  let component: CompA105Component;
  let fixture: ComponentFixture<CompA105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
