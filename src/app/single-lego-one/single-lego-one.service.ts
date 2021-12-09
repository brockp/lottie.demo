import { Injectable } from '@angular/core';
import lottie from 'lottie-web';
import anim from './single-lego-one.json';

@Injectable({
  providedIn: 'root',
})
export class SingleLegoOneService {
  // tslint:disable-next-line: no-input-rename
  private singleLegoReificationAnimation: any;
  public loop = true;
  constructor() {}

  // tslint:disable-next-line: variable-name
  setSingleLegoAnimation(_name: string): void {
    this.singleLegoReificationAnimation = _name;
  }

  getSingleLegoAnimationName(): string {
    return this.singleLegoReificationAnimation;
  }

  getAnimation(animate: any): any {
    animate = this.singleLegoReificationAnimation;

    return lottie.loadAnimation({
      container: document.querySelector(this.singleLegoReificationAnimation),
      renderer: 'svg',
      loop: this.loop,
      autoplay: true,
      animationData: anim,
    });
  }
}
