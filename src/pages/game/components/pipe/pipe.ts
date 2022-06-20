export class Pipe {
  context: CanvasRenderingContext2D;
  x = 800;
  firstPipeImg: HTMLImageElement;
  secondPipeImg: HTMLImageElement;
  secondPipeFullHeight = 935;
  secondPipeHeight = 0;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.firstPipeImg = new Image();
    this.secondPipeImg = new Image();
    this.firstPipeImg.src = 'https://i.postimg.cc/Vv2vScrW/111.png'; // TODO: мб лучше юзать картинки статичные
    this.secondPipeImg.src = 'https://i.postimg.cc/PJ5YbhqG/222.png';
    this.secondPipeHeight = this.getRandomIntInclusive();
  }

  render = () => {
    this.context.drawImage(this.firstPipeImg, this.x -= 2, 0, 100, this.secondPipeFullHeight - this.secondPipeHeight - 250);
    this.context.drawImage(this.secondPipeImg, this.x -= 2, this.secondPipeFullHeight - this.secondPipeHeight, 100, this.secondPipeHeight);

    if (this.x <= -100) {
      this.x = 800;
      this.secondPipeHeight = this.getRandomIntInclusive();
    }
  }

  getRandomIntInclusive = () => {
    const min = Math.ceil(100);
    const max = Math.floor(500);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
