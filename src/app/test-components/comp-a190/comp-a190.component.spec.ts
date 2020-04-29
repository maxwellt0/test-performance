import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA190Component } from './comp-a190.component';

describe('CompA190Component', () => {
  let component: CompA190Component;
  let fixture: ComponentFixture<CompA190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
