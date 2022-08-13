import filterMoves from "utils/filterMoves"
import findPosition from "utils/findPosition"

import Base from "pieces/Base"

import Piece from "types/Piece"
import Position from "types/Position"

class King extends Base implements Piece {
  private range = [-1, 0, -1]

  public getPossibleMoves = (pieces: Piece[]) => {
    const moves = [] as Position[]
    this.range.forEach(i => {
      this.range.forEach(j => {
        const move = {
          x: this.x + i,
          y: this.y + j,
        }
        const piece = findPosition(pieces, move)
        if (!piece || this.team !== piece.team) {
          moves.push(move)
        }
      })
    })
    return filterMoves(moves)
  }
}

export default King