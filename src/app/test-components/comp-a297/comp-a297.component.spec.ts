import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA297Component } from './comp-a297.component';

describe('CompA297Component', () => {
  let component: CompA297Component;
  let fixture: ComponentFixture<CompA297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
