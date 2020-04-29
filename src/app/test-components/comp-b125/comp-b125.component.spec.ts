import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB125Component } from './comp-b125.component';

describe('CompB125Component', () => {
  let component: CompB125Component;
  let fixture: ComponentFixture<CompB125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
