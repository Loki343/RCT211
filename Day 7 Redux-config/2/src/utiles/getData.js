export const getData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));// or get req
  return data;
};

export const setData = (key, value) => {
  localStorage.setItem(key, value);// or patch req
};
