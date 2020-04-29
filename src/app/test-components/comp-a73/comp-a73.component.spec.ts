import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA73Component } from './comp-a73.component';

describe('CompA73Component', () => {
  let component: CompA73Component;
  let fixture: ComponentFixture<CompA73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
