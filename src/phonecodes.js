fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const phoneCodes = data.map(country => ({
      country: country.name.common,
      code: country.callingCodes[0] ? `+${country.callingCodes[0]}` : ''
    }));
    console.log(phoneCodes);
  })
  .catch(error => console.log(error));