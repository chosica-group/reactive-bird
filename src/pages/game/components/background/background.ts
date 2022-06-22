import background from '../../../../assets/images/background.png';
import { BackgroundConstants } from './background-constants';

export class Background {
  context: CanvasRenderingContext2D;
  x = 0;
  bgImg: HTMLImageElement;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.bgImg = new Image();
    this.bgImg.src = background as string;
  }

  render = () => {
    this.context.drawImage(
      this.bgImg,
      (this.x -= 1),
      0,
      BackgroundConstants.WIDTH,
      BackgroundConstants.HEIGHT,
    );

    if (this.x <= BackgroundConstants.BACKGROUND_X_RESET) {
      this.x = 0;
    }
  };
}
