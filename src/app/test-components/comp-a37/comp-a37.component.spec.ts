import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA37Component } from './comp-a37.component';

describe('CompA37Component', () => {
  let component: CompA37Component;
  let fixture: ComponentFixture<CompA37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
