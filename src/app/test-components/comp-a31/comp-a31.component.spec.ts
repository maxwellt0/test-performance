import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA31Component } from './comp-a31.component';

describe('CompA31Component', () => {
  let component: CompA31Component;
  let fixture: ComponentFixture<CompA31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
