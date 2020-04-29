import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA152Component } from './comp-a152.component';

describe('CompA152Component', () => {
  let component: CompA152Component;
  let fixture: ComponentFixture<CompA152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
