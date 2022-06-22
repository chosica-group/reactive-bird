import pipe1 from '../../../../assets/images/pipe-1.png';
import pipe2 from '../../../../assets/images/pipe-2.png';
import { PipeConstants } from './pipe-constants';

export type PipesPositionsConfig = {
  y: number;
  x: number;
};

export class Pipe {
  private context: CanvasRenderingContext2D;
  private x = PipeConstants.PIPES_START_X;
  private readonly firstPipeImg: HTMLImageElement;
  private readonly secondPipeImg: HTMLImageElement;
  private secondPipeHeight: number;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.secondPipeHeight = Pipe.getRandomIntInclusive();
    this.firstPipeImg = new Image();
    this.secondPipeImg = new Image();
    this.firstPipeImg.src = pipe1 as string;
    this.secondPipeImg.src = pipe2 as string;
  }

  render = (): PipesPositionsConfig => {
    this.context.drawImage(
      this.firstPipeImg,
      (this.x -= PipeConstants.PIPES_SPEED),
      0,
      PipeConstants.PIPES_WIDTH,
      PipeConstants.PIPE_FULL_HEIGHT - this.secondPipeHeight - PipeConstants.GAP_BETWEEN_PIPES,
    );
    this.context.drawImage(
      this.secondPipeImg,
      (this.x -= PipeConstants.PIPES_SPEED),
      PipeConstants.PIPE_FULL_HEIGHT - this.secondPipeHeight,
      PipeConstants.PIPES_WIDTH,
      this.secondPipeHeight,
    );

    if (this.x <= -100) {
      this.x = PipeConstants.PIPES_START_X;
      this.secondPipeHeight = Pipe.getRandomIntInclusive();
    }

    return {
      y: PipeConstants.PIPE_FULL_HEIGHT - this.secondPipeHeight - PipeConstants.GAP_BETWEEN_PIPES,
      x: this.x,
    };
  };

  static getRandomIntInclusive = (): number => {
    const min = Math.ceil(PipeConstants.PIPE_MIN_HEIGHT);
    const max = Math.floor(PipeConstants.PIPE_MAX_HEIGHT);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}
