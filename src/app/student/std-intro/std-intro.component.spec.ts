import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdIntroComponent } from './std-intro.component';

describe('StdIntroComponent', () => {
  let component: StdIntroComponent;
  let fixture: ComponentFixture<StdIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdIntroComponent]
    });
    fixture = TestBed.createComponent(StdIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
