import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { CanvasContainer } from 'pages/game';
import './game-board.css';

export type IGameBoard = {
  height: number;
  width: number;
};

export const GameBoard = ({ height, width }: IGameBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHit, setHit] = useState<boolean>(false);
  const [game, setGame] = useState<CanvasContainer | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setGame(
      new CanvasContainer({
        canvas: canvasRef.current as HTMLCanvasElement,
        onHit: (scoreResult: number) => {
          setScore(scoreResult);
          setHit(true);
        },
      }),
    );

    return () => game?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restart = () => {
    setHit(false);
    game?.restart();
  };

  return (
    <div className="game-wrapper">
      <p>{isHit}</p>
      {isHit ? (
        <div className="game-wrapper__status-container">
          <p>Вы проиграли!</p>
          <p>Ваш результат: {score}</p>
          <Button size="large" variant="contained" onClick={restart}>
            Начать заново
          </Button>
        </div>
      ) : null}
      <canvas
        ref={canvasRef}
        style={{
          border: '3px solid black',
        }}
        height={height}
        width={width}
      />
    </div>
  );
};
