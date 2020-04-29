import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA72Component } from './comp-a72.component';

describe('CompA72Component', () => {
  let component: CompA72Component;
  let fixture: ComponentFixture<CompA72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
