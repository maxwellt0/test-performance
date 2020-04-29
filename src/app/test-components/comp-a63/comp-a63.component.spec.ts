import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA63Component } from './comp-a63.component';

describe('CompA63Component', () => {
  let component: CompA63Component;
  let fixture: ComponentFixture<CompA63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
