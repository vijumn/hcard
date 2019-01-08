import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcardEditComponent } from './hcard-edit.component';

describe('HcardEditComponent', () => {
  let component: HcardEditComponent;
  let fixture: ComponentFixture<HcardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
