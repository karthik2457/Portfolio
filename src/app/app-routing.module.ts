import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StdIntroComponent} from './student/std-intro/std-intro.component'
import {StdResumeComponent} from './student/std-resume/std-resume.component'
import {StdProjecsComponent} from './student/std-projecs/std-projecs.component'
import {StdSkillComponent} from './student/std-skill/std-skill.component'
import {StdGMapComponent} from './student/std-gmap/std-gmap.component'
import {StdContInfoComponent} from './student/std-cont-info/std-cont-info.component'
import {StdHomeComponent} from './std-home/std-home.component'


const routes: Routes = [
  { path: '', redirectTo: 'stuIntro', pathMatch: 'full' },
 // { path: 'home', component: StdHomeComponent }, redirectTo
  { path: 'stuIntro', component: StdIntroComponent },
  { path: 'stuResume', component: StdResumeComponent },
  { path: 'stuProjectsInfo', component: StdProjecsComponent },
  { path: 'stuSkills', component: StdSkillComponent },
  { path: 'stuGMap', component: StdGMapComponent },
  { path: 'stuContInfo', component: StdContInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
