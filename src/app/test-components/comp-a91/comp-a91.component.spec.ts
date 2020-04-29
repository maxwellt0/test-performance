import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA91Component } from './comp-a91.component';

describe('CompA91Component', () => {
  let component: CompA91Component;
  let fixture: ComponentFixture<CompA91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
