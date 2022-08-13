import filterMoves from "utils/filterMoves"
import findPosition from "utils/findPosition"

import Base from "pieces/Base"

import Piece from "types/Piece"
import Position from "types/Position"

class Knight extends Base implements Piece {
  private moves = [
    { x: -2, y: -1 },
    { x: -2, y: 1 },
    { x: -1, y: -2 },
    { x: -1, y: 2 },
    { x: 1, y: -2 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
  ]

  private getKnightMove = (pieces: Piece[], offset: Position) => {
    const move = {
      x: this.x + offset.x,
      y: this.y + offset.y,
    }
    const piece = findPosition(pieces, move)
    if (piece) {
      return piece.team !== this.team && move
    }
  }

  public getPossibleMoves = (pieces: Piece[]) => filterMoves(
    this.moves.map(move => this.getKnightMove(pieces, move))
  )
}

export default Knight