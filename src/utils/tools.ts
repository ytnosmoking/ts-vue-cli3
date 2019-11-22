import service from "./request";

export const getView = (name: string) => () => import(`@/pages/${name}`);
export const getCommon = (name: string) => () => import(`common/${name}`);

export const setItem = (key: string, value: any): void =>
  localStorage.setItem(key, value);

export const getItem = (key: string): any => {
  try {
    const val = localStorage.getItem(key);
    console.log(val);
    return val;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const removeItem = (key: string): void => localStorage.removeItem(key);

// ajax
export const getData = (url: string, params?: object): any => {
  return service.request({
    url,
    params,
    method: "get"
  });
};
export const postData = (url: string, data?: object): any => {
  return service.request({
    url,
    data,
    method: "post"
  });
};
