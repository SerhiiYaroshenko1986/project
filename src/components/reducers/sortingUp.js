import * as R from "ramda";

import { SORT_BY_PRICE_UP } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_BY_PRICE_UP:
      const priceIdSort = R.sortWith([
        R.descend(R.prop("id")),
        R.ascend(R.prop("price"))
      ]);
      priceIdSort(payload);
      console.log(priceIdSort);
    //   return R.merge(state, newValues);
    default:
      return state;
  }
};
