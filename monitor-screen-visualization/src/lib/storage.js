export function setStorage(key, value) {
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  }
  export function getStorage(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  }
  export function removeStorage(key) {
    return window.sessionStorage.removeItem(key);
  }
  export function clearStorage() {
    return window.sessionStorage.clear();
  }
  export function setLocalStorage(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
  export function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  export function removeLocalStorage(key) {
    return window.localStorage.removeItem(key);
  }
  export function clearLocalStorage() {
    return window.localStorage.clear();
  }
  