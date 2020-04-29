import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA87Component } from './comp-a87.component';

describe('CompA87Component', () => {
  let component: CompA87Component;
  let fixture: ComponentFixture<CompA87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
