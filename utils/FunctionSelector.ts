export const getDiffrentialFunction = (functionId: number, x: number) => {
  switch (functionId) {
    case 1:
    default:
      return Math.cos(x)

    case 2:
      return 2.0 * x
  }
}

export const getFunction = (functionId: number, x: number) => {
  switch (functionId) {
    case 1:
    default:
      return Math.sin(x)

    case 2:
      return Math.pow(x, 2)
  }
}