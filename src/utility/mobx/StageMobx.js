import { makeAutoObservable } from "mobx"

class StageMobx {

  scale = { x: 1, y: 1 }
  map = null
  data = null

  constructor() {
    makeAutoObservable(this)
  }

  scale(scale) {
    this.scale = scale
  }

  scale() {
    return this.scale
  }

  map(map) {
    this.map = map
  }

  map() {
    return map
  }

  data(data) {
    this.data = data
  }

  data() {
    return this.data
  }
}

export default new StageMobx()