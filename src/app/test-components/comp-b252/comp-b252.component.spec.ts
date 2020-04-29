import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB252Component } from './comp-b252.component';

describe('CompB252Component', () => {
  let component: CompB252Component;
  let fixture: ComponentFixture<CompB252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
