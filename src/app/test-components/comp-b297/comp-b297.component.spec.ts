import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB297Component } from './comp-b297.component';

describe('CompB297Component', () => {
  let component: CompB297Component;
  let fixture: ComponentFixture<CompB297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
