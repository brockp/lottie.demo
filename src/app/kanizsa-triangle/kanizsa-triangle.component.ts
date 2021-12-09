import { Component, Input, OnInit } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';
import anim from './kanizsa-triangle.json';
import { KanizsaTriangleService } from './kanizsa-triangle.service';

@Component({
  selector: 'app-kanizsa-triangle',
  templateUrl: './kanizsa-triangle.component.html',
  styleUrls: ['./kanizsa-triangle.component.css'],
})
export class KanizsaTriangleComponent implements OnInit {
  @Input() style: string;
  @Input() bioticPurpleTheme: boolean;
  @Input() bioticBlueTheme: boolean;
  @Input() bioticPinkTheme: boolean;
  @Input() bioticBlackTheme: boolean;
  kanizsaTriangleAnimation: AnimationItem;
  container: any;
  colorInfo: any;
  checkColor: any;
  path: any;

  constructor(private kts: KanizsaTriangleService) {}

  ngOnInit(): void {
    // Container & Animation Setup
    this.container = this.kts.setTriangleAnimation('#kanizsa-triangle');
    this.kanizsaTriangleAnimation = this.kts.getAnimation(this.container);

    // Lottie Options
    this.kanizsaTriangleAnimation.loop = true;

    // Debug only
    console.log('Kanizsa Triangle: ', this.kanizsaTriangleAnimation);
  }

  purpleTheme(): void {
    this.bioticPurpleTheme = true;
    // tslint:disable-next-line: no-conditional-assignment
    if ((this.bioticPurpleTheme = true)) {
      this.bioticBlackTheme = false;
      this.bioticPinkTheme = false;
      this.bioticBlueTheme = false;
    } else {
      // nothing
    }
  }

  blackTheme(): void {
    this.bioticBlackTheme = true;
    // tslint:disable-next-line: no-conditional-assignment
    if ((this.bioticBlackTheme = true)) {
      this.bioticPurpleTheme = false;
      this.bioticPinkTheme = false;
      this.bioticBlueTheme = false;
    } else {
      // nothing
    }
  }

  pinkTheme(): void {
    this.bioticPinkTheme = true;
    // tslint:disable-next-line: no-conditional-assignment
    if ((this.bioticPinkTheme = true)) {
      this.bioticPurpleTheme = false;
      this.bioticBlackTheme = false;
      this.bioticBlueTheme = false;
    } else {
      // nothing
    }
  }

  blueTheme(): void {
    this.bioticBlueTheme = true;
    // tslint:disable-next-line: no-conditional-assignment
    if ((this.bioticBlueTheme = true)) {
      this.bioticPurpleTheme = false;
      this.bioticPinkTheme = false;
      this.bioticBlackTheme = false;
    } else {
      // nothing
    }
  }
}
