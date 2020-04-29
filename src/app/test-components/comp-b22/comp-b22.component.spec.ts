import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB22Component } from './comp-b22.component';

describe('CompB22Component', () => {
  let component: CompB22Component;
  let fixture: ComponentFixture<CompB22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
