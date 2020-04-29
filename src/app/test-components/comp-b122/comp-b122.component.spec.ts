import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB122Component } from './comp-b122.component';

describe('CompB122Component', () => {
  let component: CompB122Component;
  let fixture: ComponentFixture<CompB122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
