export const mapUserByProperties = (data = [], property) => {
  return data.map((item) => item[property]);
};
