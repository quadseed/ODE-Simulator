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
      console.log(x + "     " + y)
    }

    const k1 = function_f(x)
    const k2 = function_f(x + h / 2.0)
    const k3 = function_f(x + h / 2.0)
    const k4 = function_f(x + h)

    y += (h / 6.0) * (k1 + 2.0*k2 + 2.0*k3 + k4)
    x += h
  }

  return result
}

const function_f = (x: number) => {
  return 2.0 * x
}

const EPS = .00000001

export default calculate