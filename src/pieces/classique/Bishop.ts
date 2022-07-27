import WhiteBishop from "assets/WhiteBishop.png"
import BlackBishop from "assets/BlackBishop.png"

import findDirectionalMoves from "utils/findDirectionalMoves"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"

const teamToImageMap = {
  white: WhiteBishop,
  black: BlackBishop,
}

const moves = [
  { x: -1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
]

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]) => moves.reduce(
  (result, move) => ([
    ...result,
    ...findDirectionalMoves(currentPiece, pieces, move)
  ]), [] as Position[],
)

export default pieceFactory(teamToImageMap, getPossibleMoves)