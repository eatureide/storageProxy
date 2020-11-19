class Storage {

  constructor () {
    this.storage = localStorage
  }

  getItem(key) {
    const res = JSON.parse(localStorage.getItem(key) || '{}')
    return localStorage.getItem(res.value)
  }

  setItem(key, value) {

    const transfer = JSON.stringify({
      value,
      key,
      type: typeof value
    })

    const { value } = JSON.parse(localStorage.getItem(key) || '{}')

    localStorage.setItem(key, transfer)
  }
}

const define = new Storage()

define.getItem('a')

