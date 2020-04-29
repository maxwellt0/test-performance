import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA121Component } from './comp-a121.component';

describe('CompA121Component', () => {
  let component: CompA121Component;
  let fixture: ComponentFixture<CompA121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
