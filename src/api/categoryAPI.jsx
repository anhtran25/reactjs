import instance from "./instance";

export const createcate = (category) => {
  const url = "/category";
  return instance.post(url, category);
};
export const listcate = () => {
  const url = "/category?_sort=id&_order=desc";
  return instance.get(url);
};
export const readcate = (id) => {
  const url = "/category/" + id;
  return instance.get(url);
};
export const removecate = (id) => {
  const url = "/category/" + id;
  return instance.delete(url);
};
export const updatecate = (category) => {
  const url = "/category/" + category.id;
  return instance.patch(url, category);
};