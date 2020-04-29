import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA233Component } from './comp-a233.component';

describe('CompA233Component', () => {
  let component: CompA233Component;
  let fixture: ComponentFixture<CompA233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
