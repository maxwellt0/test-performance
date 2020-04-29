import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA252Component } from './comp-a252.component';

describe('CompA252Component', () => {
  let component: CompA252Component;
  let fixture: ComponentFixture<CompA252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
