import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA176Component } from './comp-a176.component';

describe('CompA176Component', () => {
  let component: CompA176Component;
  let fixture: ComponentFixture<CompA176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
