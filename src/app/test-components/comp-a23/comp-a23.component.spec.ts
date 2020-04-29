import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA23Component } from './comp-a23.component';

describe('CompA23Component', () => {
  let component: CompA23Component;
  let fixture: ComponentFixture<CompA23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
