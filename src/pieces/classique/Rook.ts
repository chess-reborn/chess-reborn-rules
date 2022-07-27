import WhiteRook from "assets/WhiteRook.png"
import BlackRook from "assets/BlackRook.png"

import findDirectionalMoves from "utils/findDirectionalMoves"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"

const teamToImageMap = {
  white: WhiteRook,
  black: BlackRook,
}

const moves = [
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
]

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]): Position[] => moves.reduce(
  (result, move) => ([
    ...result,
    ...findDirectionalMoves(currentPiece, pieces, move)
  ]), [] as Position[],
)

export default pieceFactory(teamToImageMap, getPossibleMoves)