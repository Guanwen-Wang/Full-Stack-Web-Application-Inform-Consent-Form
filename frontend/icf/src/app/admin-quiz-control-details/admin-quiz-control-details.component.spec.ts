import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizControlDetailsComponent } from './admin-quiz-control-details.component';

describe('AdminQuizControlDetailsComponent', () => {
  let component: AdminQuizControlDetailsComponent;
  let fixture: ComponentFixture<AdminQuizControlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuizControlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizControlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
