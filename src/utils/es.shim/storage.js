if (!Storage.prototype.setLocalExpire) {
  Object.defineProperty(Storage.prototype, "setLocalExpire", {
    value(item) {
      if (!arguments[2] || isNaN(arguments[2] - 0)) {
        console.log('未设置时间')
      } else {
        let obj = {
          data: arguments[1],
          time: Date.now(),
          expire: arguments[2]
        };
        localStorage.setItem(arguments[0], JSON.stringify(obj));
      }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
}

if (!Storage.prototype.getLocalExpire) {
  Object.defineProperty(Storage.prototype, "getLocalExpire", {
    value(key) {
      let val = localStorage.getItem(key);
      if (!val) {
          return val;
      }
      val = JSON.parse(val);
      if (Date.now() - val.time > val.expire) {
          localStorage.removeItem(key);
          return null;
      }
      return val.data;
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
}

if (!Storage.prototype.setSessionExpire) {
  Object.defineProperty(Storage.prototype, "setSessionExpire", {
    value(item) {
      if (!arguments[2] || isNaN(arguments[2] - 0)) {
        console.log('未设置时间')
      } else {
        let obj = {
          data: arguments[1],
          time: Date.now(),
          expire: arguments[2]
        };
        sessionStorage.setItem(arguments[0], JSON.stringify(obj));
      }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
}

if (!Storage.prototype.getSessionExpire) {
  Object.defineProperty(Storage.prototype, "getSessionExpire", {
    value(key) {
      let val = sessionStorage.getItem(key);
      if (!val) {
          return val;
      }
      val = JSON.parse(val);
      if (Date.now() - val.time > val.expire) {
          sessionStorage.removeItem(key);
          return null;
      }
      return val.data;
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
}