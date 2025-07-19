import { Country } from "country-state-city";

function getCountryCode(countryName) {
  const countryCode = Country.getAllCountries().find(
    (country) => country.name == countryName
  ).isoCode;

  return countryCode;
}

export { getCountryCode };
