export const getDiffrentialFunction = (functionId: number, x: number) => {
  switch (functionId) {
    case 1:
    default:
      return Math.cos(x)

    case 2:
      return 2.0 * Math.pow(x, 5) + 6.0 * x + 1
  }
}