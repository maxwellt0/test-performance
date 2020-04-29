import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA171Component } from './comp-a171.component';

describe('CompA171Component', () => {
  let component: CompA171Component;
  let fixture: ComponentFixture<CompA171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
