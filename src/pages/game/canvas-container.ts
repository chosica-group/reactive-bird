import { Background } from 'pages/game/components/background';
import { Bird } from 'pages/game/components/bird';
import { Pipe } from 'pages/game/components/pipe';

type CanvasContainerProps = {
  canvas: HTMLCanvasElement;
  onHit: (score: number) => void;
};

export class CanvasContainer {
  private readonly context: CanvasRenderingContext2D;
  private bird: Bird | undefined;
  private pipe: Pipe | undefined;
  private backGround: Background | undefined;
  private isHit: boolean;
  private readonly onHit: (score: number) => void;

  constructor(props: CanvasContainerProps) {
    this.isHit = false;
    this.context = props.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.onHit = props.onHit;
    this.addListener();
    this.initGame();
  }

  restart = () => {
    this.isHit = false;
    this.initGame();
  };

  destroy = () => window.removeEventListener('keypress', this.handleSpacePress);

  private initGame = () => {
    this.startGame();
    this.animate();
  };

  private addListener = () => window.addEventListener('keypress', this.handleSpacePress);

  private handleSpacePress = (event: KeyboardEvent) => {
    if (!this.isHit && event.code === 'Space' && this.context && this.bird) {
      this.bird.jumpCounter = 0;
      this.bird.shouldJump = true;
    }
  };

  private startGame = () => {
    if (this.context) {
      this.bird = new Bird(this.context);
      this.pipe = new Pipe(this.context);
      this.backGround = new Background(this.context);
    }
  };

  private animate = () => {
    if (!this.isHit && this.pipe && this.bird) {
      requestAnimationFrame(this.animate);
      this.backGround?.render();

      if (this.bird.draw(this.pipe.render())) {
        this.isHit = true;
        this.onHit(this.bird.score);
      }
    }
  };
}
