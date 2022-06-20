import { useEffect, useRef, useState } from 'react';
import { Bird } from '../bird';
import { Background } from '../background';
import { Pipe } from '../pipe';

export type IGameBoard = {
  height: number;
  width: number;
}

export const GameBoard = ({ height, width }: IGameBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  let bird: Bird;
  let bg: Background;
  let pipe: Pipe;

  const handleSpacePress = (event: KeyboardEvent) => {
    if (event.code === 'Space' && context) {
      bird.jumpCounter = 0;
      bird.shouldJump = true;
    }
  }

  function animate() {
    if (context) {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, width, height);
      bg.render();
      pipe.render();

      bird.draw(context);
    }
  }

  const startGame = () => {
    bird = new Bird(150,450,50,'black');
  };

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext("2d"));

    if (context) {
      bg = new Background(context);
      pipe = new Pipe(context);
      startGame();
      animate();
    }
  }, [context]);

  useEffect(() => {
    window.addEventListener('keypress', handleSpacePress);

    return () => window.removeEventListener('keypress', handleSpacePress);
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "3px solid black",
      }}
      height={height}
      width={width}
    />
  );
};
