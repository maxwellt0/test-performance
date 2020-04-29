import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB97Component } from './comp-b97.component';

describe('CompB97Component', () => {
  let component: CompB97Component;
  let fixture: ComponentFixture<CompB97Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB97Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
