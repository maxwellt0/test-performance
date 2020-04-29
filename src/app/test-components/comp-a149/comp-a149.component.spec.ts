import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA149Component } from './comp-a149.component';

describe('CompA149Component', () => {
  let component: CompA149Component;
  let fixture: ComponentFixture<CompA149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
