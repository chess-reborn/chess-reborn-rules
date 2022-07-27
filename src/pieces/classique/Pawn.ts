import WhitePawn from "assets/WhitePawn.png"
import BlackPawn from "assets/BlackPawn.png"

import findPieceAtPosition from "utils/findPieceAtPosition"

import pieceFactory from "pieces/pieceFactory"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"
import isEnemyAtPosition from "utils/isEnemyAtPosition"

const teamToImageMap = {
  white: WhitePawn,
  black: BlackPawn,
}

const getDirection = (team: Team) => {
  switch(team) {
    case "white": return -1
    case "black": return 1
    default: return NaN
  }
}

const isPawnAbleToDoubleStep = (pawn: Piece) => {
  let position
  if (pawn.team === "white") {
    position = 6
  }
  if (pawn.team === "black") {
    position = 1
  }
  return pawn.y === position
}

const getPossibleMoves = (currentPiece: Piece, pieces: Piece[]) => {
  const moves = [] as Position[]
  const direction = getDirection(currentPiece.team)

  const nextCell = {
    x: currentPiece.x,
    y: currentPiece.y + direction
  }
  if (
    findPieceAtPosition(pieces, nextCell) ||
    isEnemyAtPosition(pieces, currentPiece.team, nextCell)
  ) {
    moves.push(nextCell)
  }

  if (isPawnAbleToDoubleStep(currentPiece)) {
    const secondCell = {
      x: currentPiece.x,
      y: currentPiece.y + direction * 2,
    }
    if (
      findPieceAtPosition(pieces, secondCell) ||
      isEnemyAtPosition(pieces, currentPiece.team, secondCell)
    ) {
      moves.push(nextCell)
    }
  }

  [-1, 1].forEach(horizontalDirection => {
    const move = {
      x: currentPiece.x + horizontalDirection,
      y: currentPiece.y + direction,
    }

    if (isEnemyAtPosition(pieces, currentPiece.team, move)) {
      moves.push(move)
    }
  })

  return moves
}

export default pieceFactory(teamToImageMap, getPossibleMoves)