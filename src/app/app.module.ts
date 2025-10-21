import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdIntroComponent } from './student/std-intro/std-intro.component';
import { StdSkillComponent } from './student/std-skill/std-skill.component';
import { StdProjecsComponent } from './student/std-projecs/std-projecs.component';
import { StdResumeComponent } from './student/std-resume/std-resume.component';
import { StdContInfoComponent } from './student/std-cont-info/std-cont-info.component';
import { StdGMapComponent } from './student/std-gmap/std-gmap.component';
import { StdHomeComponent } from './std-home/std-home.component';

@NgModule({
  declarations: [
    AppComponent,
    StdIntroComponent,
    StdSkillComponent,
    StdProjecsComponent,
    StdResumeComponent,
    StdContInfoComponent,
    StdGMapComponent,
    StdHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
