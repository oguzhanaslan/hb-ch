const dataKey = 'links';

const localStorageSupport = () => {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    console.log(e.stack);
  }
  return false;
};

export const getLinkListData = () => {
  if (localStorageSupport()) {
    let localData = localStorage.getItem(dataKey);
    return localData ? JSON.parse(localData) : [];
  }
};

export const setLinkListData = (data) => {
  if (localStorageSupport()) {
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
};
