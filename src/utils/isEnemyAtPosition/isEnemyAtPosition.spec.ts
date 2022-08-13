import Pawn from "pieces/classique/Pawn"

import findPieceAtPosition from "./isEnemyAtPosition"

test("checks if it finds piece", () => {
  const piece = new Pawn(1, 1, "black")
  const enemy = new Pawn(1, 2, "white")
  expect(findPieceAtPosition(
    [ piece, enemy ],
    piece.team,
    { x: 1, y: 2 },
  )).toBeTruthy()
})

test("checks if it triggers on same team", () => {
  const piece = new Pawn(1, 1, "black")
  const enemy = new Pawn(1, 2, "black")
  expect(findPieceAtPosition(
    [ piece, enemy ],
    piece.team,
    { x: 1, y: 2 },
  )).toBeFalsy()
})

test("checks if it finds nothing", () => {
  const piece = new Pawn(1, 1, "black")
  expect(findPieceAtPosition(
    [ piece ],
    piece.team,
    { x: 1, y: 3 },
  )).toBeFalsy()
})