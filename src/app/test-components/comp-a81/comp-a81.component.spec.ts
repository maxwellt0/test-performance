import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA81Component } from './comp-a81.component';

describe('CompA81Component', () => {
  let component: CompA81Component;
  let fixture: ComponentFixture<CompA81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
