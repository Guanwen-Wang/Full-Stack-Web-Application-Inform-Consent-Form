import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectControlDetailSingleComponent } from './admin-project-control-detail-single.component';

describe('AdminProjectControlDetailSingleComponent', () => {
  let component: AdminProjectControlDetailSingleComponent;
  let fixture: ComponentFixture<AdminProjectControlDetailSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectControlDetailSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectControlDetailSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
