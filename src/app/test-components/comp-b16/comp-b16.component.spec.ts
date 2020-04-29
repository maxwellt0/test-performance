import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB16Component } from './comp-b16.component';

describe('CompB16Component', () => {
  let component: CompB16Component;
  let fixture: ComponentFixture<CompB16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
