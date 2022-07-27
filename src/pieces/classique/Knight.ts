import WhiteKnight from "assets/WhiteKnight.png"
import BlackKnight from "assets/BlackKnight.png"

import filterMoves from "utils/filterMoves"
import findPieceAtPosition from "utils/findPieceAtPosition"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"

const teamToImageMap = {
  white: WhiteKnight,
  black: BlackKnight,
}

const moves = [
  { x: -2, y: -1 },
  { x: -2, y: 1 },
  { x: -1, y: -2 },
  { x: -1, y: 2 },
  { x: 1, y: -2 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
]

const getKnightMove = (currentPiece: Piece, pieces: Piece[], offset: Position) => {
  const move = {
    x: currentPiece.x + offset.x,
    y: currentPiece.y + offset.y,
  }
  const piece = findPieceAtPosition(pieces, move)
  if (piece) {
    return piece.team !== currentPiece.team && move
  }
}

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]) => filterMoves(
  moves.map(move => getKnightMove(currentPiece, pieces, move))
)

export default pieceFactory(teamToImageMap, getPossibleMoves)