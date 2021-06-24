import { makeAutoObservable } from "mobx"


export class ShapeMobx {
  constructor(props) {
    makeAutoObservable(this)
    this.id = Math.round(Math.random() * 10000)
    this.name = props.name
    this.x = props.x
    this.y = props.y
    this.rotation = props.rotation
    this.width = props.width
    this.height = props.height
    this.vertices = props.vertices
    this.type = props.type
  }

  x = 0
  setX(x) {
    this.x = x
  }

  y = 0
  setY(y) {
    this.y = y
  }

  rotation = 0
  setRotation(rotation) {
    this.rotation = rotation
  }

  type = ''
  setType(type) {
    this.type = type
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

  /**
   * selection shape
   */
  selected = ''
  setSelected(id) {
    this.selected = id
  }
}

export default new CanvasMobx()