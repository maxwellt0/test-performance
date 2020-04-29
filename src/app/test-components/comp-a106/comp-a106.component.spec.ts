import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA106Component } from './comp-a106.component';

describe('CompA106Component', () => {
  let component: CompA106Component;
  let fixture: ComponentFixture<CompA106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
