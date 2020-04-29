import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB240Component } from './comp-b240.component';

describe('CompB240Component', () => {
  let component: CompB240Component;
  let fixture: ComponentFixture<CompB240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
