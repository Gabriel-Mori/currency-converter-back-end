

class ConvertService {
  async convertCDNLogsToAgoraFormat() {
    const file = await this.getFile()


    return "OK"
  }


  async getFile() {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "mTYzA440tO2ZitWLUbO6rQUFPMXzzaNS");

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/currency_data/convert?to=to&from=from&amount=amount", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}

module.exports = new ConvertService()