import findPosition from "utils/findPosition"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

const isEnemyAtPosition = (pieces: Piece[], team: Team, position: Position) => {
  const piece = findPosition(pieces, position)
  return piece && piece.team !== team
}

export default isEnemyAtPosition