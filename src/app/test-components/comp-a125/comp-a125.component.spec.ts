import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA125Component } from './comp-a125.component';

describe('CompA125Component', () => {
  let component: CompA125Component;
  let fixture: ComponentFixture<CompA125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
