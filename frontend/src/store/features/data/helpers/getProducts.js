const getProductsData = (product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    shippingInformation: product.shippingInformation,
    availabilityStatus: product.availabilityStatus,
    reviews: product.reviews,
    warrantyInformation: product.warrantyInformation,
    image: product.thumbnail,
  };
};

export default getProductsData;
