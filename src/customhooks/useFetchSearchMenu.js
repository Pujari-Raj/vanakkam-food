const filterItems = (data) => {
  const filterData = [];
  data?.map((cards) => {
    if (cards?.card?.card?.itemCards) {
      cards?.card?.card?.itemCards?.map((item) => filterData?.push(item?.card));
    }
    if (cards?.card?.card?.categories) {
      cards?.card?.card?.categories?.map((category) =>
        category?.itemCards?.map((item) => filterData?.push(item?.card))
      );
    }
  });
  return filterData;
};

const cartItemCalculator = (cartItems) => {
  let totalItems = 0,
    totalCost = 0;
  cartItems.map((item) => {
    totalCost +=
      (item?.price
        ? item?.price
        : item?.finalPrice
        ? item?.finalPrice
        : item?.defaultPrice) * item?.qty;
    totalItems += item?.qty;
  });
  return { totalCost, totalItems };
};

export { filterItems, cartItemCalculator };
