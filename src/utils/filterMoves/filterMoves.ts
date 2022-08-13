import Position from "types/Position"

const isInBounds = (move: Position) => (
  move.x >= 0 && move.x < 8 && move.y >= 0 && move.y < 8
)

const filterMoves = (moves: (Position | false | undefined | null)[]) => (
  moves.filter(move => !!move && isInBounds(move)) as Position[]
)

export default filterMoves