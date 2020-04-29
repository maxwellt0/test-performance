import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA248Component } from './comp-a248.component';

describe('CompA248Component', () => {
  let component: CompA248Component;
  let fixture: ComponentFixture<CompA248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
