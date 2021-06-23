import { makeAutoObservable } from "mobx"


export class PointShapeMobx {
  constructor(props) {
    makeAutoObservable(this)
    this.x = props.x
    this.y = props.y
    this.rotation = props.rotation
  }

  x = 0
  setX(value) {
    this.x = value
  }

  y = 0
  setY(value) {
    this.y = value
  }

  rotation = 0
  setRotation(value) {
    this.rotation = value
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

  /**
   * scale
   */
  scale = { x: 1, y: 1 }
  setScale(value) {
    this.scale = value
  }

}

export default new CanvasMobx()