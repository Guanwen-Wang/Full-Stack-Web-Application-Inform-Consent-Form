import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAfterConfirmComponent } from './summary-after-confirm.component';

describe('SummaryAfterConfirmComponent', () => {
  let component: SummaryAfterConfirmComponent;
  let fixture: ComponentFixture<SummaryAfterConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAfterConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAfterConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
