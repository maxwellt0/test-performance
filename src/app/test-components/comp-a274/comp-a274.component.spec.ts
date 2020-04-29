import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA274Component } from './comp-a274.component';

describe('CompA274Component', () => {
  let component: CompA274Component;
  let fixture: ComponentFixture<CompA274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
