import { makeAutoObservable } from "mobx"

class CanvasMobx {
  constructor() {
    makeAutoObservable(this)
  }

  /**
   * current draw tool
   */
  currentTool = 'mousepoint'

  setCurrentTool(value) {
    this.currentTool = value
  }

  /**
   * map serialize
   */
  raw = []
  
  setRaw(value) {
    this.raw = value
  }

}

export default new CanvasMobx()