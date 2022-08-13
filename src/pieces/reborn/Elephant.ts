import filterMoves from "utils/filterMoves"
import findPosition from "utils/findPosition"

import Base from "pieces/Base"

import Piece from "types/Piece"

class Elephant extends Base implements Piece {
  private moves = [
    { x: -2, y: -2 },
    { x: -2, y: 2 },
    { x: 2, y: -2 },
    { x: 2, y: 2 },
  ]
    
  public getPossibleMoves = (pieces: Piece[]) => filterMoves(
    this.moves.filter(({ x, y }) => {
      const move = {
        x: this.x + x,
        y: this.y + y,
      }
      const piece = findPosition(pieces, move)
      return !piece || piece.team !== this.team
    })
  )
}

export default Elephant