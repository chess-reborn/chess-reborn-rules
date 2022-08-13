import findDirectionalMoves from "utils/findDirectionalMoves"

import Base from "pieces/Base"

import Piece from "types/Piece"
import Position from "types/Position"

class Rook extends Base implements Piece {
  private moves = [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
  ]

  public getPossibleMoves = (pieces: Piece[]): Position[] => this.moves.reduce(
    (result, move) => ([
      ...result,
      ...findDirectionalMoves(this, pieces, move)
    ]), [] as Position[],
  )
}

export default Rook