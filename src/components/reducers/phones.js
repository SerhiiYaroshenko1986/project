import * as R from "ramda";

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
  SORT_BY_PRICE_UP,
  SORT_BY_PRICE_DOWN
} from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop("id"), payload);
      return R.merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop("id"), payload);
      return R.merge(state, moreValues);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    case SORT_BY_PRICE_UP:
      console.log(payload, "payload");
      const byPriceUp = R.ascend(R.prop("price"));
      const moreValuesUp = R.indexBy(R.prop("id"), payload);
      console.log(moreValuesUp);
      const phonesByPriceUp = R.sort(byPriceUp, payload);
      console.log(phonesByPriceUp, "sortup");
      console.log(state, "state");
      return R.merge(state, phonesByPriceUp);
    case SORT_BY_PRICE_DOWN:
      const byPriceDown = R.descend(R.prop("price"));
      const phonesByPriceDown = R.sort(byPriceDown, payload);
      console.log(phonesByPriceDown, "sortdown");
      return R.merge(state, phonesByPriceDown);
  }
  return state;
};
