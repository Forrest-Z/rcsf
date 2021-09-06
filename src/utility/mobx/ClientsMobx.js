import { makeAutoObservable } from 'mobx'

class VehicleMobx {
  constructor(props) {
    makeAutoObservable(this)

    this.socket = null
    this.id = ''
    this.name = props.name
    this.x = ''
    this.y = ''
  }

  position() {
    return {
      x: this.x,
      y: this.y
    }
  }

  startSocket() {
    this.socket = new WebSocket(`ws://localhost:8000/ws/${this.name}`)
  }

  stopSocket() {
    this.socket.close()
    this.socket = null
  }

  reciveSocket() {
    this.socket.onmessage = (evt) => {
      const message = JSON.parse(evt.data)
      console.log(message)
    }
  }
}

class ClientsMobx {
  constructor(props) {
    makeAutoObservable(this)

    this.clients = []
  }

  init(vehicleList) {
    vehicleList.forEach((element) => {
      this.clients.push(new VehicleMobx({name: element}))
    })
  }

  enableAll() {
    this.clients.forEach((element) => {
      element.startSocket()
      element.reciveSocket()
    })
  }

  getByName(name) {
    return this.clients.find((elment) => elment.name === name)
  }
}

export default new ClientsMobx()
