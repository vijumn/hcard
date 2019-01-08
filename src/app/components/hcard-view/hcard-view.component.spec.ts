import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcardViewComponent } from './hcard-view.component';

describe('HcardViewComponent', () => {
  let component: HcardViewComponent;
  let fixture: ComponentFixture<HcardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
