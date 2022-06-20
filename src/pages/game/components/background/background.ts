export class Background {
  context: CanvasRenderingContext2D;
  x = 0;
  bgImg: HTMLImageElement;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.bgImg = new Image();
    this.bgImg.src = 'https://wallpaperaccess.com/full/4622710.png'; // TODO: мб лучше юзать картинки статичные
  }

  render = () => {
    this.context.drawImage(this.bgImg, this.x--, 0, 1500, 1000);

    if (this.x <= -568) {
      this.x = 0;
    }
  }
}
