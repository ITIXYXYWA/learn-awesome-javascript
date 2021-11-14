let target = { _secure: false, _admin: 'Admin', _password: '12312412412', admin: true };
target = new Proxy(target, {

  get(target, prop) {
    if (prop in target) {
      return prop !== '_secure' ? target[prop] : undefined;
    }
    return undefined;
  },

  set(target, prop, val) {
    return prop === '_secure' ? target[prop] = val : new Error('dont change secure');;
  },

  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  },

  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      return new Error("Access denied");
    };
    return delete target[prop];
  },

});

console.log(target._secure);
console.log(target.admin);