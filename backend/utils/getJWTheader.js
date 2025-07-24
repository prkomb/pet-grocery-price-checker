const getJWTheader = (authHeader) => {
  const jwtToken = authHeader.split(" ").at(1);
  return jwtToken;
};

export { getJWTheader };
