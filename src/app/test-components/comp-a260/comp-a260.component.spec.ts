import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA260Component } from './comp-a260.component';

describe('CompA260Component', () => {
  let component: CompA260Component;
  let fixture: ComponentFixture<CompA260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
