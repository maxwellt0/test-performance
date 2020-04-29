import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA101Component } from './comp-a101.component';

describe('CompA101Component', () => {
  let component: CompA101Component;
  let fixture: ComponentFixture<CompA101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
