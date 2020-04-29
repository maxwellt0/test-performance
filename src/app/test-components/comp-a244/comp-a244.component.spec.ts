import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA244Component } from './comp-a244.component';

describe('CompA244Component', () => {
  let component: CompA244Component;
  let fixture: ComponentFixture<CompA244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
