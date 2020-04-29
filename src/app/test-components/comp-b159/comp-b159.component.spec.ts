import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB159Component } from './comp-b159.component';

describe('CompB159Component', () => {
  let component: CompB159Component;
  let fixture: ComponentFixture<CompB159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
