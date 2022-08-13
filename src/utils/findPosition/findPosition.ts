import Position from "types/Position"

const findPosition = <T extends Position>(positions: T[], { x, y }: Position) => (
  positions.find((position) => position.x === x && position.y === y)
)

export default findPosition