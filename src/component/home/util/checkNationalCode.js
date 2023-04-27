export const checkNationalCode = (nationalID) => {
    if (nationalID) {
      let code = nationalID
      let last = parseInt(code[9], 10)
      let num =
        [0, 1, 2, 3, 4, 5, 6, 7, 8]
          .map(function (n) {
            return parseInt(code[n], 10) * (10 - n)
          })
          .reduce(function (code, n) {
            return code + n
          }) % 11
      return (num < 2 && last === num) || (num >= 2 && last + num === 11)
    }
    return true
  }