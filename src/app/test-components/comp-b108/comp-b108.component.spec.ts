import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB108Component } from './comp-b108.component';

describe('CompB108Component', () => {
  let component: CompB108Component;
  let fixture: ComponentFixture<CompB108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
