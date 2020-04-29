import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA204Component } from './comp-a204.component';

describe('CompA204Component', () => {
  let component: CompA204Component;
  let fixture: ComponentFixture<CompA204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
