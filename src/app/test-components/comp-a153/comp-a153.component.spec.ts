import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA153Component } from './comp-a153.component';

describe('CompA153Component', () => {
  let component: CompA153Component;
  let fixture: ComponentFixture<CompA153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
