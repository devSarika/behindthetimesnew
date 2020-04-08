import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UberComponent } from './uber.component';

describe('UberComponent', () => {
  let component: UberComponent;
  let fixture: ComponentFixture<UberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
