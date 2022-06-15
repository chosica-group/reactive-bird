export class Bird {
  x: number;
  y: number;
  size: number;
  color: string
  jumpHeight: number;
  fallHeiht: number;
  shouldJump = false;
  jumpCounter = 0;
  jumpUp: boolean;
  spin: number;
  spinIncrement: number;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.jumpHeight = 6;
    this.fallHeiht = 4;
    this.shouldJump = false;
    this.jumpCounter = 0;
    this.jumpUp = true;
    this.spin = 0;
    this.spinIncrement = 90 / 32;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.jump(ctx);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    if (this.shouldJump) {
      this.counterRotation(ctx);
    }
  }

  jump(ctx: CanvasRenderingContext2D) {
    if (this.shouldJump) {
      this.jumpCounter++;

      if (this.y > this.jumpHeight) {
        this.y -= this.jumpHeight;
      }

      this.rotation(ctx);

      if (this.jumpCounter >= 22) {
        this.counterRotation(ctx);
        this.spin = 0;
        this.shouldJump = false;
      }
    } else if (this.y < 950) {
      this.y += this.fallHeiht;
    }
  }

  rotation(ctx: CanvasRenderingContext2D) {
    let offsetXPosition = this.x + (this.size / 2);
    let offsetYPosition = this.y + (this.size / 2);

    ctx.translate(offsetXPosition,offsetYPosition);
    ctx.rotate(this.spin * Math.PI / 180);
    ctx.rotate(this.spinIncrement * Math.PI / 180 );
    ctx.translate(-offsetXPosition,-offsetYPosition);
    this.spin += this.spinIncrement;
  }

  counterRotation(ctx: CanvasRenderingContext2D) {
    let offsetXPosition = this.x + (this.size / 2);
    let offsetYPosition = this.y + (this.size / 2);

    ctx.translate(offsetXPosition,offsetYPosition);
    ctx.rotate(-this.spin * Math.PI / 180 );
    ctx.translate(-offsetXPosition,-offsetYPosition);
  }
}
