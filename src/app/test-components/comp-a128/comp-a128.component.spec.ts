import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA128Component } from './comp-a128.component';

describe('CompA128Component', () => {
  let component: CompA128Component;
  let fixture: ComponentFixture<CompA128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
