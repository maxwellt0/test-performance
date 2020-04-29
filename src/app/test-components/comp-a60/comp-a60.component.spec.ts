import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA60Component } from './comp-a60.component';

describe('CompA60Component', () => {
  let component: CompA60Component;
  let fixture: ComponentFixture<CompA60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
