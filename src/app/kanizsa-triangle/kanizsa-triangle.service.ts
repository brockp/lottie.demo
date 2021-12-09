import { Injectable, Input } from '@angular/core';
import lottie from 'lottie-web';
import LottieWebParser from 'lottie-web-parser';
import anim from './kanizsa-triangle.json';

@Injectable({
  providedIn: 'root',
})
export class KanizsaTriangleService {
  // tslint:disable-next-line: no-input-rename
  private kanizsaTriangleAnimation = 'no';
  public loop = true;
  public colorInfo: any;
  public path: string;
  constructor() {}

  // tslint:disable-next-line: variable-name
  setTriangleAnimation(_name: string): void {
    this.kanizsaTriangleAnimation = _name;
  }

  getTriangleAnimationName(): string {
    return this.kanizsaTriangleAnimation;
  }

  getColorData(): any {
    this.colorInfo = LottieWebParser.parseColors(anim);
    console.log(this.colorInfo);
  }

  getAnimation(animate: any): any {
    animate = this.kanizsaTriangleAnimation;

    return lottie.loadAnimation({
      container: document.querySelector(this.kanizsaTriangleAnimation),
      renderer: 'svg',
      loop: this.loop,
      autoplay: true,
      animationData: anim,
    });
  }

  changeColor(animate: any): void {
    animate = this.kanizsaTriangleAnimation;
    lottie.destroy();
    this.colorInfo = LottieWebParser.parseColors(anim);
    this.path = 'layers.0.shapes.0.it.1';
    LottieWebParser.replaceColor([0, 0, 0, 1], this.path, anim);
    lottie.play();
    console.log(this.colorInfo);
  }
}
