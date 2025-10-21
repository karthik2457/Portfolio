import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSkillComponent } from './std-skill.component';

describe('StdSkillComponent', () => {
  let component: StdSkillComponent;
  let fixture: ComponentFixture<StdSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdSkillComponent]
    });
    fixture = TestBed.createComponent(StdSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
