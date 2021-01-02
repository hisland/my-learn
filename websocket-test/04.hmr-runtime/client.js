const socket = new WebSocket('ws://localhost:12321', 'my-protocol')

socket.addEventListener('open', function ({ target }) {
  console.log('client open1')
})

socket.addEventListener('close', function ({ code, wasClean, reason, target }) {
  console.log('client close1', code)
})

socket.addEventListener('message', function ({ data: _data, type, target }) {
  console.log('\nmessage from server:', type, _data.toString())
  const data = JSON.parse(_data.toString())
  if (data.type === 'update') {
    applyUpdate(data.url)
  }
})

socket.addEventListener('error', function (err) {
  const { error, message, type, target } = err
  console.log('client error', err)
})

const REGISTERED_MODULES = {}

class HotModuleState {
  id = null
  data = {}
  isLocked = false
  isDeclined = false
  isAccepted = false
  acceptCallbacks = []
  disposeCallbacks = []
  constructor(id) {
    this.id = id
  }
  lock() {
    this.isLocked = true
  }
  accept(callback) {
    this.acceptCallbacks.push(callback)
  }
}

export function createHotContext(fullUrl) {
  const id = new URL(fullUrl).pathname
  // const existing = REGISTERED_MODULES[id]
  // if (existing) {
  //   existing.lock()
  //   return existing
  // }
  const state = new HotModuleState(id)
  REGISTERED_MODULES[id] = state
  return state
}

async function applyUpdate(url) {
  const state = REGISTERED_MODULES[url]
  if (!state) return false

  const updateID = Date.now()
  const [newModule] = await Promise.all([import(`${url}?mtime=${updateID}`)])
  for (const cb of state.acceptCallbacks) {
    cb(newModule)
  }
}
