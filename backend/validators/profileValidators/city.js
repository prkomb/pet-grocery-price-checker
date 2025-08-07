import { City } from "country-state-city";
import { cityMapper } from "./../../utils/cityMapper.js";
import { getCountryCode } from "./../../utils/getCountryCode.js";

export function CityChecker(countryCode, cityName) {
  const { getCitiesOfCountry } = City;

  const cities = cityMapper(getCitiesOfCountry(countryCode));

  return cities;
}
