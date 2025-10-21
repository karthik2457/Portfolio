import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdGMapComponent } from './std-gmap.component';

describe('StdGMapComponent', () => {
  let component: StdGMapComponent;
  let fixture: ComponentFixture<StdGMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdGMapComponent]
    });
    fixture = TestBed.createComponent(StdGMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
