import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA198Component } from './comp-a198.component';

describe('CompA198Component', () => {
  let component: CompA198Component;
  let fixture: ComponentFixture<CompA198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
