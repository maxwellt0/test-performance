import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB280Component } from './comp-b280.component';

describe('CompB280Component', () => {
  let component: CompB280Component;
  let fixture: ComponentFixture<CompB280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
