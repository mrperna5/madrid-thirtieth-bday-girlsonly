import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent {

  constructor(private router: Router) { }
  navigateToAnreise() {
    this.router.navigate(['/attractions/anreise']);
  }

  navigateToProgramm() {
    this.router.navigate(['/attractions/programm']);
  }

  navigateToUnterkunft() {
    this.router.navigate(['/attractions/unterkunft']);
  }

  navigateToWichtiges() {
    this.router.navigate(['/attractions/wichtiges']);
  }


}
