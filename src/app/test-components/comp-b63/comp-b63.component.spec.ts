import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB63Component } from './comp-b63.component';

describe('CompB63Component', () => {
  let component: CompB63Component;
  let fixture: ComponentFixture<CompB63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
