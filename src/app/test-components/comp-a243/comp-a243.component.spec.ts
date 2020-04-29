import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA243Component } from './comp-a243.component';

describe('CompA243Component', () => {
  let component: CompA243Component;
  let fixture: ComponentFixture<CompA243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
