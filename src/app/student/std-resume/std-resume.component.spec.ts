import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdResumeComponent } from './std-resume.component';

describe('StdResumeComponent', () => {
  let component: StdResumeComponent;
  let fixture: ComponentFixture<StdResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdResumeComponent]
    });
    fixture = TestBed.createComponent(StdResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
