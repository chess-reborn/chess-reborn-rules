import Piece from "types/Piece"
import Position from "types/Position"

import range from "utils/range"
import filterMoves from "utils/filterMoves"
import findPosition from "utils/findPosition"

const findDirectionalMoves = (currentPiece: Piece, pieces: Piece[], direction: Position) => {
  const moves = [] as Position[]

  for (const i of range(8)) {
    const step = i + 1
    
    const move = {
      x: currentPiece.x + direction.x * step,
      y: currentPiece.y + direction.y * step,
    }
    const foundPiece = findPosition(pieces, move)

    if (foundPiece) {
      if (foundPiece.team !== currentPiece.team) {
        moves.push(move)
      }
      break
    }
    
    if (!foundPiece) {
      moves.push(move)
    }
  }

  return filterMoves(moves)
}

export default findDirectionalMoves