const calculate = () => {
  const result = {
    x: [],
    y: []
  }

  let x = 0
  let y = 0

  let h = 0.01, dx = 1.0, xmax = 10.0
  let ddx = 0.0

  while (x <= xmax + EPS) {
    if (x >= ddx - EPS) {
      ddx += dx
      console.log(Math.round(x) + "     " + y)
    }

    y += h * function_f(x)
    x += h
  }

  return result
}

const function_f = (x: number) => {
  return 2.0 * x
}

const EPS = .00000001

export default calculate