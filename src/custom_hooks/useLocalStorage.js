import { useState } from "react";

export function useLocalStorage(tokenName) {
  const [token, setToken] = useState(`${tokenName}`);
  function setItem(tokName) {
    localStorage.setItem(tokName, `${new Date().toLocaleString()}`);
    if (token !== `${tokName}`) setToken(`${tokName}`);
  }

  function removeItem() {
    delete localStorage[token];
    console.log(token);
  }
  setItem(token);
  return [token, { setItem, removeItem }];
}
