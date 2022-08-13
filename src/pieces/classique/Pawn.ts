import findPosition from "utils/findPosition"
import isEnemyAtPosition from "utils/isEnemyAtPosition"

import Base from "pieces/Base"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

class Pawn extends Base implements Piece {
  private getDirection = (team: Team) => {
    switch(team) {
      case "white": return -1
      case "black": return 1
      default: return NaN
    }
  }
  
  private isPawnAbleToDoubleStep = () => {
    let position
    if (this.team === "white") {
      position = 6
    }
    if (this.team === "black") {
      position = 1
    }
    return this.y === position
  }
  
  public getPossibleMoves = (pieces: Piece[]) => {
    const moves = [] as Position[]
    const direction = this.getDirection(this.team)
  
    const nextCell = {
      x: this.x,
      y: this.y + direction
    }
    if (findPosition(pieces, nextCell) || isEnemyAtPosition(pieces, this.team, nextCell)) {
      moves.push(nextCell)
    }
  
    if (this.isPawnAbleToDoubleStep()) {
      const secondCell = {
        x: this.x,
        y: this.y + direction * 2,
      }
      if (findPosition(pieces, secondCell) || isEnemyAtPosition(pieces, this.team, secondCell)) {
        moves.push(nextCell)
      }
    }
  
    [-1, 1].forEach(horizontalDirection => {
      const move = {
        x: this.x + horizontalDirection,
        y: this.y + direction,
      }
  
      if (isEnemyAtPosition(pieces, this.team, move)) {
        moves.push(move)
      }
    })
  
    return moves
  }
}

export default Pawn