const getFunction = (functionId: number, x: number) => {
  switch (functionId) {
    case 1:
    default:
      return 2.0 * x

    case 2:
      return 2.0 * Math.pow(x, 5) + 6.0 * x + 1
  }
}

export default getFunction