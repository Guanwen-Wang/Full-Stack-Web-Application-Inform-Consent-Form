import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachResultPreComponent } from './teach-result-pre.component';

describe('TeachResultPreComponent', () => {
  let component: TeachResultPreComponent;
  let fixture: ComponentFixture<TeachResultPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachResultPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachResultPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
