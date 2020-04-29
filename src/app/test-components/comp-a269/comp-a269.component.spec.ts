import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA269Component } from './comp-a269.component';

describe('CompA269Component', () => {
  let component: CompA269Component;
  let fixture: ComponentFixture<CompA269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
