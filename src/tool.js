const handler = {
  get(target, property) {
    return Reflect.get(target, property)
  },
  set(_, property) {
    return Reflect.set(target, property)
  }
}

localStorage.__proto__ = new Proxy(localStorage.__proto__, handler)