import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA156Component } from './comp-a156.component';

describe('CompA156Component', () => {
  let component: CompA156Component;
  let fixture: ComponentFixture<CompA156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
