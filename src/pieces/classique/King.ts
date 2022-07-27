import WhiteKing from "assets/WhiteKing.png"
import BlackKing from "assets/BlackKing.png"

import filterMoves from "utils/filterMoves"
import findPieceAtPosition from "utils/findPieceAtPosition"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"

const teamToImageMap = {
  white: WhiteKing,
  black: BlackKing,
}

const range = [-1, 0, -1]

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]) => {
  const moves = [] as Position[]
  range.forEach(i => {
    range.forEach(j => {
      const move = {
        x: currentPiece.x + i,
        y: currentPiece.y + j,
      }
      const piece = findPieceAtPosition(pieces, move)
      if (!piece || currentPiece.team !== piece.team) {
        moves.push(move)
      }
    })
  })
  return filterMoves(moves)
}

export default pieceFactory(teamToImageMap, getPossibleMoves)