import { makeAutoObservable } from "mobx"

// Custom Components
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

class StageMobx {
  scale = { x: 1, y: 1 }
  map = null
  data = null
  grid = false
  axis = false
  mousePosition = {}
  drawTool = DRAW_TOOL_TYPE.INACTIVE
  shapes = []

  selection = []

  constructor() {
    makeAutoObservable(this)
  }

  setScale(scale) {
    this.scale = scale
  }

  setMap(map) {
    this.map = map
  }

  setData(data) {
    this.data = data
  }

  setGrid(isShow) {
    this.grid = isShow
  }

  setAxis(isShow) {
    this.axis = isShow
  }

  setMousePosition(value) {
    this.mousePosition = value
  }

  setDrawTool(value) {
    this.drawTool = value
  }

  setShapes(value) {
    this.shapes = value
  }

  setSelection(value) {
    this.selection = value
  }
}

export class ShapeMobx {
  x = 0
  y = 0
  id = ''
  name = ''
  rotation = ''
  width = 0
  height = 0
  points = []
  type = 0

  constructor(props) {
    makeAutoObservable(this)

    this.x = props.x
    this.y = props.y
    this.name = props.name
    this.id = Math.round(Math.random() * 10000)
    this.rotation = props.rotation
    this.points = props.points
    this.type = props.type
    this.width = props.width
    this.height = props.height
  }

  setX(x) {
    this.x = x
  }

  setY(y) {
    this.y = y
  }

  setName(name) {
    this.name = name
  }

  setHeight(height) {
    this.height = height
  }

  setWidth(width) {
    this.width = width
  }

  setRotation(rotation) {
    this.rotation = rotation
  }

  setVertices(vertices) {
    this.vertices = vertices
  }

  setType(type) {
    this.type = type
  }
}

export default new StageMobx()