import { getDiffrentialFunction } from "./FunctionSelector"

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

    const k1 = getDiffrentialFunction(functionId, x)
    const k2 = getDiffrentialFunction(functionId, x + h / 2.0)
    const k3 = getDiffrentialFunction(functionId, x + h / 2.0)
    const k4 = getDiffrentialFunction(functionId, x + h)

    y += (h / 6.0) * (k1 + 2.0*k2 + 2.0*k3 + k4)
    x += h
  }

  return result
}

const EPS = .00000001