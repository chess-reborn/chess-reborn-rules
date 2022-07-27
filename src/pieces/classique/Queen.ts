import WhiteQueen from "assets/WhiteQueen.png"
import BlackQueen from "assets/BlackQueen.png"

import findDirectionalMoves from "utils/findDirectionalMoves"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"

const teamToImageMap = {
  white: WhiteQueen,
  black: BlackQueen,
}

const moves = [
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
]

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]): Position[] => moves.reduce(
  (result, move) => ([
    ...result,
    ...findDirectionalMoves(currentPiece, pieces, move)
  ]), [] as Position[],
)

export default pieceFactory(teamToImageMap, getPossibleMoves)