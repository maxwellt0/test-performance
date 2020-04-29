import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA79Component } from './comp-a79.component';

describe('CompA79Component', () => {
  let component: CompA79Component;
  let fixture: ComponentFixture<CompA79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
