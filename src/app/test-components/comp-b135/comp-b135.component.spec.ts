import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB135Component } from './comp-b135.component';

describe('CompB135Component', () => {
  let component: CompB135Component;
  let fixture: ComponentFixture<CompB135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
