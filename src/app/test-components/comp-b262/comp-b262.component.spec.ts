import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB262Component } from './comp-b262.component';

describe('CompB262Component', () => {
  let component: CompB262Component;
  let fixture: ComponentFixture<CompB262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
