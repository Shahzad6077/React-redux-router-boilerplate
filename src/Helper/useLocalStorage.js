export const getLocalStorage = (key) => {
  const value = window.localStorage.getItem(key) || null;
  return value;
};
export const setLocalStorage = (key, val) => {
  window.localStorage.setItem(key, val);
  return;
};

export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
  return;
};
