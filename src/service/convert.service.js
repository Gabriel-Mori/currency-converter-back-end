const convertMoney = async ({ fromCurrency, toCurrency, amount }) => {
  const requestOptions = {}
  const result = await fetch(
    `https://api.currencylayer.com/convert?access_key=mTYzA440tO2ZitWLUbO6rQUFPMXzzaNS&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
    requestOptions
  ).catch((error) => console.log("error", error))

  return result
}

export default convertMoney