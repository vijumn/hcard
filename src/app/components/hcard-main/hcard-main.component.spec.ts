import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcardMainComponent } from './hcard-main.component';

describe('HcardMainComponent', () => {
  let component: HcardMainComponent;
  let fixture: ComponentFixture<HcardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
