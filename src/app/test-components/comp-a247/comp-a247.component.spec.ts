import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA247Component } from './comp-a247.component';

describe('CompA247Component', () => {
  let component: CompA247Component;
  let fixture: ComponentFixture<CompA247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
