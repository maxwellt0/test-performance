import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB148Component } from './comp-b148.component';

describe('CompB148Component', () => {
  let component: CompB148Component;
  let fixture: ComponentFixture<CompB148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
