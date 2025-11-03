import { ReactNode, useCallback, useEffect, useState } from "react";

// Types definition
// 1 for Player X, 0 for Player O
type Player = 1 | 0;

// PositionedBox represents a cell occupied by a player at a specific step
interface PositionedBox {
  row: number;
  column: number;
  occupiedBy: Player;
  step: number;
}

const GameBar = () => {
  // game state management
  // define starter player
  const starter: Player = 1;
  // current player state
  const [currentPlayer, setCurrentPlayer] = useState<Player>(starter);
  // function to handle player switch
  const handlePlayer = (p: Player) => {
    setCurrentPlayer(p === 0 ? 1 : 0);
  };

  // game history and step management
  // step indicates the current move number
  const [step, setStep] = useState<number>(0);
  // positions hold the history of all moves made
  const [positions, setPositions] = useState<PositionedBox[]>([]);
  //  history to track all moves for undo/redo functionality
  const [history, setHistory] = useState<PositionedBox[]>([]);

  // winner calculation
  // determine if there's a winner or a draw
  const [winner, setWinner] = useState<Player | "draw" | null>(null);
  // winningLine to highlight the winning combination
  const [winningLine, setWinningLine] = useState<[number, number][]>([]);

  // effect to check for a winner after each move

  useEffect(() => {
    const lines: [number, number][][] = [
      // Rows
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Columns
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // Diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];
    /**
     * Find the winner of the game.
     * @returns {void}
     */
    const findWinner = () => {
      // Check each winning line
      for (const line of lines) {
        // Map the line to the occupiedBy values
        const maper = line.map(([row, col]) => {
          return positions.find((box) => box.column === col && box.row === row)
            ?.occupiedBy;
        });
        // If all values in maper are the same and not undefined, we have a winner
        if (maper[0] !== undefined && maper.every((val) => val === maper[0])) {
          setWinner(maper[0] as Player);
          setWinningLine(line);
          return;
        }
      }
      // If no winner and all positions are filled, it's a draw
      if (positions.length === 9) {
        setWinner("draw");
        setWinningLine([]);
      } else {
        setWinner(null);
        setWinningLine([]);
      }
    };
    findWinner();
  }, [positions]);

  // effect to update positions based on history and step
  useEffect(() => {
    // update positions to reflect the current step in history
    const updatePosition = () => {
      setPositions(history.slice(0, step));
    };
    updatePosition();
  }, [history, step]);

  // handle winner notification
  const handleWinner = useCallback(() => {
    // if there's a winner, show an alert and reset the game
    if (winner !== null) {
      setTimeout(() => {
        if (
          confirm(
            winner === "draw"
              ? "It's a draw!"
              : `Player ${winner === 1 ? "X" : "O"} wins!`
          )
        ) {
          reset();
        }
      }, 100);
      return;
    }
  }, [winner]);

  // effect to trigger winner handling
  useEffect(() => {
    handleWinner();
  }, [handleWinner]);

  // handle cell click to make a move
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    // if there's already a winner, do nothing
    handleWinner();
    // check if the cell is already occupied
    const occupied = positions.some(
      (box) => box.column === colIndex && box.row === rowIndex
    );
    // if occupied, do nothing
    if (occupied) return;
    // create a new move and update the state
    const newMove: PositionedBox = {
      row: rowIndex,
      column: colIndex,
      occupiedBy: currentPlayer,
      step: step,
    };
    // update history and positions
    setHistory([...positions, newMove]);
    // update step and current player
    setStep(step + 1);
    // handle player turn switch
    handlePlayer(currentPlayer);
  };

  // render cell content based on positions and winning line
  const renderCellChild = (rowIndex: number, colIndex: number): ReactNode => {
    // find if the cell is occupied and by whom
    const PositionedBox = positions.find(
      (box) => box.column === colIndex && box.row === rowIndex
    );
    // check if the cell is part of the winning line
    const isWinningCell = winningLine.some(
      ([row, col]) => row === rowIndex && col === colIndex
    );
    // render X or O with winning animation if applicable
    if (PositionedBox) {
      return (
        <span className={isWinningCell ? "animate-pulse text-lime-500" : ""}>
          {PositionedBox.occupiedBy === 1 ? "X" : "O"}
        </span>
      );
    }

    return null;
  };
  // handle undo and redo functionality
  const handleUndo = () => {
    // if at the beginning of history, do nothing
    if (step <= 0) return;
    // get the previous move and update the state
    const prev = history[step - 1];
    // update step and current player
    setStep(step - 1);
    //  handle player turn switch
    setCurrentPlayer(prev.occupiedBy);
  };
  // handle redo functionality
  const handleRedo = () => {
    // if at the end of history, do nothing
    if (step >= history.length) return;
    // get the next move and update the state
    const next = history[step];
    //  update step and current player
    setStep(step + 1);
    // handle player turn switch
    handlePlayer(next.occupiedBy);
  };
  // reset the game state
  const reset = () => {
    // clear all states to initial values
    setStep(0);
    setHistory([]);
    setCurrentPlayer(1);
  };

  return (
    <div className="text-foreground h-full">
      {/* Header : Game Title  & Controls */}
      <header className="flex items-center justify-between p-4">
        <h1 className="text-sm">
          Game : <span className="text-white/70">XOX</span>
        </h1>
        <div className="grid grid-cols-3 space-x-1">
          <button
            onClick={handleUndo}
            disabled={step === 0}
            className="bg-background/30 hover:bg-background/70 flex h-8 w-8 items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
          <button
            onClick={handleRedo}
            disabled={step === history.length}
            className="bg-background/30 hover:bg-background/70 flex h-8 w-8 rotate-y-180 transform items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
          <button
            onClick={reset}
            className="bg-background/30 hover:bg-background/70 flex h-8 w-8 rotate-y-180 transform items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </header>
      {/* Main Game Area */}
      <main className="flex h-full w-full flex-1 items-center justify-center">
        {/* Game Board */}
        <div className="border-foreground/20 flex flex-col border">
          {[...Array(3)].map((_, rowIndex) => {
            return (
              <div key={rowIndex} className="grid grid-cols-3">
                {[...Array(3)].map((_, colIndex) => {
                  return (
                    <div
                      key={colIndex}
                      onClick={() => {
                        handleCellClick(rowIndex, colIndex);
                      }}
                      className="border-foreground/20 flex h-24 w-24 cursor-pointer items-center justify-center border text-3xl hover:bg-white/10"
                    >
                      {renderCellChild(rowIndex, colIndex)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default GameBar;
