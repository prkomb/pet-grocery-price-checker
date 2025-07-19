import { City } from "country-state-city";
import { cityMapper } from "./../../utils/cityMapper.js";
import { getCountryCode } from "./../../utils/getCountryCode.js";

export function CityChecker(countryName, cityName) {
  const { getCitiesOfCountry } = City;

  const countryCode = getCountryCode(countryName);

  const cities = cityMapper(getCitiesOfCountry(countryCode));

  return cities;
}
