import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA43Component } from './comp-a43.component';

describe('CompA43Component', () => {
  let component: CompA43Component;
  let fixture: ComponentFixture<CompA43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
