import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA226Component } from './comp-a226.component';

describe('CompA226Component', () => {
  let component: CompA226Component;
  let fixture: ComponentFixture<CompA226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
