import { makeAutoObservable } from "mobx"


export class PointShapeMobx {
  constructor(props) {
    makeAutoObservable(this)
    this.x = props.x
  }

  x = 0
  setX(value) {
    this.x = value
  }
}
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