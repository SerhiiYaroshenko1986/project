import phones from "./allPhones";
import * as R from "ramda";
import categories from "../api/categories";

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones);
    // reject('error')
  });
};

export const loadMorePhones = async ({ offset }) => {
  // fetch.get(`http://url/phones?offset=${offset}`)
  return new Promise((resolve, reject) => {
    resolve(phones);
    // reject('error')
  });
};
export const fetchPhonesById = async id => {
  // fetch.get(`http://url/phones?offset=${offset}`)
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq("id", id), phones);
    resolve(phone);
    // reject('error')
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
    // reject('error')
  });
};
