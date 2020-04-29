import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA46Component } from './comp-a46.component';

describe('CompA46Component', () => {
  let component: CompA46Component;
  let fixture: ComponentFixture<CompA46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
