import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA235Component } from './comp-a235.component';

describe('CompA235Component', () => {
  let component: CompA235Component;
  let fixture: ComponentFixture<CompA235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
