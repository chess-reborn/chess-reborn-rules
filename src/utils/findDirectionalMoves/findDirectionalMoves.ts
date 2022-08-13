import Piece from "types/Piece"
import Position from "types/Position"

import range from "utils/range"
import filterMoves from "utils/filterMoves"
import findPosition from "utils/findPosition"

const findDirectionalMoves = (currentPiece: Piece, pieces: Piece[], direction: Position) => {
  const moves = [] as Position[]

  range(8).some((step) => {
    const move = {
      x: currentPiece.x + direction.x * step,
      y: currentPiece.y + direction.y * step,
    }
    const foundPiece = findPosition(pieces, move)

    if (foundPiece) {
      if (foundPiece.team !== currentPiece.team) {
        moves.push(move)
      }
      return true
    }
    
    if (!foundPiece) {
      moves.push(move)
    }
    
    return false
  })

  return filterMoves(moves)
}

export default findDirectionalMoves