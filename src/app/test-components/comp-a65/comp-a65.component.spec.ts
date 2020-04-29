import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA65Component } from './comp-a65.component';

describe('CompA65Component', () => {
  let component: CompA65Component;
  let fixture: ComponentFixture<CompA65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
