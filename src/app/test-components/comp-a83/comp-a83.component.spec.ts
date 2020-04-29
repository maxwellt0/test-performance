import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA83Component } from './comp-a83.component';

describe('CompA83Component', () => {
  let component: CompA83Component;
  let fixture: ComponentFixture<CompA83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
