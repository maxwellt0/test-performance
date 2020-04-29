import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA26Component } from './comp-a26.component';

describe('CompA26Component', () => {
  let component: CompA26Component;
  let fixture: ComponentFixture<CompA26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
