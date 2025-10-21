import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProjecsComponent } from './std-projecs.component';

describe('StdProjecsComponent', () => {
  let component: StdProjecsComponent;
  let fixture: ComponentFixture<StdProjecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdProjecsComponent]
    });
    fixture = TestBed.createComponent(StdProjecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
