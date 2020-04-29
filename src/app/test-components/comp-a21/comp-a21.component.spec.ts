import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA21Component } from './comp-a21.component';

describe('CompA21Component', () => {
  let component: CompA21Component;
  let fixture: ComponentFixture<CompA21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
