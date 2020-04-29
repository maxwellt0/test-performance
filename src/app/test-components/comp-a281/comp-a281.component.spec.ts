import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA281Component } from './comp-a281.component';

describe('CompA281Component', () => {
  let component: CompA281Component;
  let fixture: ComponentFixture<CompA281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
