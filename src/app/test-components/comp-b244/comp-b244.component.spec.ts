import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB244Component } from './comp-b244.component';

describe('CompB244Component', () => {
  let component: CompB244Component;
  let fixture: ComponentFixture<CompB244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
