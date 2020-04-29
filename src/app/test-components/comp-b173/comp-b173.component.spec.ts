import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB173Component } from './comp-b173.component';

describe('CompB173Component', () => {
  let component: CompB173Component;
  let fixture: ComponentFixture<CompB173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
