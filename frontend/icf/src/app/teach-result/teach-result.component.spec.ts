import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachResultComponent } from './teach-result.component';

describe('TeachResultComponent', () => {
  let component: TeachResultComponent;
  let fixture: ComponentFixture<TeachResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
