import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { SingleLegoOneService } from './single-lego-one.service';

@Component({
  selector: 'app-single-lego-one',
  templateUrl: './single-lego-one.component.html',
  styleUrls: ['./single-lego-one.component.css'],
})
export class SingleLegoOneComponent implements OnInit {
  // Color Themes
  bioticPurpleTheme: boolean;
  bioticBlueTheme: boolean;
  bioticBlurpleTheme: boolean;
  bioticPinkTheme: boolean;
  bioticBlackTheme: boolean;

  // Hide/Show Lego Pieces
  hideSingleLegoOne: boolean;
  hideSingleLegoTwo: boolean;
  hideSingleLegoThree: boolean;
  hideSingleLegoFour: boolean;
  hideDoubleLegoOne: boolean;
  hideDoubleLegoTwo: boolean;
  hideDoubleLegoThree: boolean;
  hideDoubleLegoFour: boolean;
  hideDoubleLegoFive: boolean;
  hideDoubleLegoSix: boolean;
  hideDoubleLegoSeven: boolean;
  hideDoubleLegoEight: boolean;

  // Default Animation Variables
  singleLegoOneAnimation: AnimationItem;
  // anim: AnimationItem;
  container: any;

  constructor(private slos: SingleLegoOneService) {}

  ngOnInit(): void {
    // Container & Animation Setup
    this.container = this.slos.setSingleLegoAnimation('#single-lego-one');
    this.singleLegoOneAnimation = this.slos.getAnimation(this.container);

    // Lottie Options
    this.singleLegoOneAnimation.loop = true;
    // this.singleLegoOneAnimation.goToAndPlay('doubledots');

    // Debug only
    console.log('Single Lego Reification: ', this.singleLegoOneAnimation);
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

  pinkTheme(): void {
    this.bioticPinkTheme = true;
    // tslint:disable-next-line: no-conditional-assignment
    if ((this.bioticPinkTheme = true)) {
      this.bioticPurpleTheme = false;
      this.bioticBlueTheme = false;
      this.bioticBlackTheme = false;
    } else {
      // nothing
    }
  }
}
