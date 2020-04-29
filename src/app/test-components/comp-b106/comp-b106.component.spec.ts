import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB106Component } from './comp-b106.component';

describe('CompB106Component', () => {
  let component: CompB106Component;
  let fixture: ComponentFixture<CompB106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
