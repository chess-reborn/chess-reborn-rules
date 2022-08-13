import filterMoves from "./filterMoves"

test("checks if moves are filtered correctly", () => {
  const moves = filterMoves([
    { x: 0, y: 1 },
    { x: 7, y: 0 },
    { x: 1, y: 1 },

    null,
    undefined,
    false,
    { x: -1, y: 1 },
    { x: -1, y: 1 },
    { x: 1, y: 8 },
    { x: 8, y: 1 },
  ])

  expect(moves).toMatchObject([
    { x: 0, y: 1 },
    { x: 7, y: 0 },
    { x: 1, y: 1 },
  ])
})