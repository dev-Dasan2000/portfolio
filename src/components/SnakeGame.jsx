import React, { useState, useEffect, useCallback } from 'react';
import '../css/game.css';

export default function SnakeGame() {
    const [snake, setSnake] = useState([[10, 10]]);
    const [food, setFood] = useState([5, 5]);
    const [direction, setDirection] = useState('RIGHT');
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [foodCount, setFoodCount] = useState(5);
    const [success, setSuccess] = useState(false);
    
    const generateFood = useCallback(() => {
      const newFood = [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      ];
      setFood(newFood);
    }, []);
  
    const resetGame = () => {
      setSnake([[10, 10]]);
      setDirection('RIGHT');
      setGameStarted(false);
      setGameOver(false);
      setSuccess(false);
      setFoodCount(5);
      generateFood();
    };
  
    const moveSnake = useCallback(() => {
      if (!gameStarted || gameOver || success) return;
      
      const newSnake = [...snake];
      let head = [...newSnake[0]];
  
      switch (direction) {
        case 'UP':
          head[1] -= 1;
          break;
        case 'DOWN':
          head[1] += 1;
          break;
        case 'LEFT':
          head[0] -= 1;
          break;
        case 'RIGHT':
          head[0] += 1;
          break;
        default:
          break;
      }
  
      if (head[0] === food[0] && head[1] === food[1]) {
        const newFoodCount = foodCount - 1;
        setFoodCount(newFoodCount);
        if (newFoodCount === 0) {
          setSuccess(true);
          setGameStarted(false);
        } else {
          generateFood();
        }
      } else {
        newSnake.pop();
      }
  
      if (head[0] >= 20 || head[0] < 0 || head[1] >= 20 || head[1] < 0) {
        setGameOver(true);
        setGameStarted(false);
        return;
      }
  
      newSnake.unshift(head);
      setSnake(newSnake);
    }, [snake, direction, food, gameStarted, gameOver, success, foodCount, generateFood]);
  
    useEffect(() => {
      const handleKeyPress = (e) => {
        if (gameOver || success) return;
        
        switch (e.key) {
          case 'ArrowUp':
            if (direction !== 'DOWN') setDirection('UP');
            break;
          case 'ArrowDown':
            if (direction !== 'UP') setDirection('DOWN');
            break;
          case 'ArrowLeft':
            if (direction !== 'RIGHT') setDirection('LEFT');
            break;
          case 'ArrowRight':
            if (direction !== 'LEFT') setDirection('RIGHT');
            break;
          default:
            break;
        }
      };
  
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }, [direction, gameOver, success]);
  
    useEffect(() => {
      const gameLoop = setInterval(moveSnake, 150);
      return () => clearInterval(gameLoop);
    }, [moveSnake]);
  
    return (
      <div className="snake-game-container">
        <div className="game-wrapper">
          <div className="game-board">
            {success ? (
              <div className="success-screen">
                <div className="end-message">WELL DONE!</div>
                <button onClick={resetGame} className="retry-button">
                  play-again
                </button>
              </div>
            ) : gameOver ? (
              <div className="game-over-screen">
                <div className="end-message">GAME OVER!</div>
                <button onClick={resetGame} className="retry-button">
                  start-again
                </button>
              </div>
            ) : (
              <>
                {snake.map((segment, index) => (
                  <div
                    key={index}
                    className="snake-segment"
                    style={{
                      left: `${(segment[0] * 100) / 20}%`,
                      top: `${(segment[1] * 100) / 20}%`
                    }}
                  />
                ))}
                
                <div
                  className="food"
                  style={{
                    left: `${(food[0] * 100) / 20}%`,
                    top: `${(food[1] * 100) / 20}%`
                  }}
                />
              </>
            )}
          </div>

          <div className="controls">
            <div className="controls-text">// use keyboard arrows to play</div>
            <div className="arrow-key-container">
              <div className="arrow-keys">
                {['↑'].map((arrow) => (
                  <div key={arrow} className="arrow-key">
                    {arrow}
                  </div>
                ))}
              </div>
              <div className="arrow-keys">
                {['←', '↓', '→'].map((arrow) => (
                  <div key={arrow} className="arrow-key">
                    {arrow}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="food-counter-label">// food left</div>
          <div className="food-dots">
            {Array(5).fill(0).map((_, i) => (
              <div
                key={i}
                className={`food-dot ${i < foodCount ? 'active' : 'inactive'}`}
              />
            ))}
          </div>

          <div className="game-buttons">
            {!gameOver && !success && (
              <button
                onClick={() => {
                  setGameStarted(true);
                  setDirection('RIGHT');
                }}
                className="start-button"
              >
                start-game
              </button>
            )}
            <button onClick={resetGame} className="skip-button">
              skip
            </button>
          </div>
        </div>
      </div>
    );
}
