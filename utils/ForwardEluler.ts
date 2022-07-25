import getFunction from "./FunctionSelector"

export const calculate = (functionId: number, h: number, xmax: number) => {
  const result: number[] = []

  let x = 0
  let y = 0

  let dx = 1.0
  let ddx = 0.0

  while (x <= xmax + EPS) {
    if (x >= ddx - EPS) {
      ddx += dx
      result.push(y)
    }

    y += h * getFunction(functionId, x)
    x += h
  }

  return result
}

const EPS = .00000001