function sortedProducts(items) {
  const sAr = [...items].sort((firstItem, secondItem) => {
    return (
      parseFloat(firstItem.price.replace("£", "")) -
      parseFloat(secondItem.price.replace("£", ""))
    );
  });
  return sAr;
}

export function maxSortProducts(items) {
  const sAr = [...items].sort((firstItem, secondItem) => {
    return (
      parseFloat(secondItem.price.replace("£", "")) -
      parseFloat(firstItem.price.replace("£", ""))
    );
  });
  return sAr;
}

export default sortedProducts;
