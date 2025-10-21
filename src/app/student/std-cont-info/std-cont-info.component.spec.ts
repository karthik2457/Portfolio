import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdContInfoComponent } from './std-cont-info.component';

describe('StdContInfoComponent', () => {
  let component: StdContInfoComponent;
  let fixture: ComponentFixture<StdContInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdContInfoComponent]
    });
    fixture = TestBed.createComponent(StdContInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
