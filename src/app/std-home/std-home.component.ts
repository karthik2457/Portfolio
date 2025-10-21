import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std-home',
  templateUrl: './std-home.component.html',
  styleUrls: ['./std-home.component.scss']
})
export class StdHomeComponent {
  selectedComponet = ""
  constructor(@Inject(Router) private router: Router){}
  ngOnInit(){}
  routeTo(selectedSection : string) {
    console.log("selected section", selectedSection)
    this.selectedComponet = selectedSection;
    this.router.navigate(['stuIntro'])
  }

  isActive(comp:string) {
    console.log("is active called for :", comp)
    return comp == this.selectedComponet;
  }
}
