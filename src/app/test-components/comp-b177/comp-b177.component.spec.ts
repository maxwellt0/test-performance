import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB177Component } from './comp-b177.component';

describe('CompB177Component', () => {
  let component: CompB177Component;
  let fixture: ComponentFixture<CompB177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
