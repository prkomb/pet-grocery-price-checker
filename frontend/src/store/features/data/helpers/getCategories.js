function getCategories(productsData) {
  return productsData
    .map((data) => {
      return data.tags;
    })
    .map((data) => data.join(", "))
    .reduce((arc, item) => {
      if (arc.includes(item)) {
        return arc;
      }
      arc.push(item.split(", ").at(0));

      return arc;
    }, [])
    .map((item) => {
      return {
        title: item,
        icon: emojiMap[item].emoji,
        description: emojiMap[item].description,
      };
    });
}

export default getCategories;
