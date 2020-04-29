import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB216Component } from './comp-b216.component';

describe('CompB216Component', () => {
  let component: CompB216Component;
  let fixture: ComponentFixture<CompB216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
