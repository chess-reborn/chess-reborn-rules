import Pawn from "pieces/classique/Pawn"

import findPosition from "./findPosition"

test("checks if it finds piece", () => {
  const piece = new Pawn(1, 1, "black")
  expect(findPosition([ piece ], { x: 1, y: 1 })).toMatchObject(piece)
})

test("checks if it finds nothing", () => {
  expect(findPosition([ new Pawn(2, 1, "black") ], { x: 1, y: 1 })).toBeFalsy()
})