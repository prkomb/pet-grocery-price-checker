import { Country } from "country-state-city";
import { CityChecker } from "./city.js";

function isCityInCountry(checkerCountry, checkerCity) {
  const { getAllCountries } = Country;

  const validCountry = getAllCountries().find(
    (country) => country.name == checkerCountry
  );

  if (!validCountry) {
    throw new Error("The Country was not found");
  }

  const countryCities = CityChecker(validCountry.name, checkerCity);

  if (!countryCities.includes(checkerCity)) {
    throw new Error("The City was not found in the country");
  }

  return true;
}
