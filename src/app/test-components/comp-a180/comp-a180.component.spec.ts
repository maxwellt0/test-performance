import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA180Component } from './comp-a180.component';

describe('CompA180Component', () => {
  let component: CompA180Component;
  let fixture: ComponentFixture<CompA180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
