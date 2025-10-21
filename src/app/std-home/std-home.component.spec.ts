import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomeComponent } from './std-home.component';

describe('StdHomeComponent', () => {
  let component: StdHomeComponent;
  let fixture: ComponentFixture<StdHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdHomeComponent]
    });
    fixture = TestBed.createComponent(StdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
