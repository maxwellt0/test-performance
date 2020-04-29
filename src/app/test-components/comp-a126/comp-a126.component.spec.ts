import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA126Component } from './comp-a126.component';

describe('CompA126Component', () => {
  let component: CompA126Component;
  let fixture: ComponentFixture<CompA126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
