import { Country } from "country-state-city";
import { CityChecker } from "./city.js";

export function isCityInCountryMiddleware(request, response, next) {
  const {
    body: { city },
  } = request;

  const GB_ISO_CODE = "GB";

  const countryCities = CityChecker(GB_ISO_CODE, city);

  if (!countryCities.includes(city)) {
    return response
      .status(400)
      .send({ error: '"The City was not found in the country"' });
  }

  next();
}
