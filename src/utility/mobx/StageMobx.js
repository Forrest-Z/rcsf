import { makeAutoObservable } from 'mobx'

// Custom Components
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

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
    this.id = props.id
    this.rotation = props.rotation
    this.points = props.points
    this.type = props.type
    this.width = props.width
    this.height = props.height
  }

  setID(value) {
    this.id = value
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

class StageMobx {
  scale = { x: 1, y: 1 }
  map = null
  data = null
  grid = false
  axis = false
  mousePosition = {}
  drawTool = DRAW_TOOL_TYPE.INACTIVE
  shapes = []

  selection = { id: -1 }
  menu = null

  constructor() {
    makeAutoObservable(this)
  }

  setScale(scale) {
    this.scale = scale
  }

  setMap(map) {
    this.map = map
    if (this.map) {
      this.setShapes(map.raw.map((item) => new ShapeMobx(item)))
    }
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

  setMenu(value) {
    this.menu = value
  }

  getPointIndex() {
    let index = 0
    for (let i = 0; i < this.shapes.length; i++) {
      if (
        this.shapes[i].type === DRAW_TOOL_TYPE.ROUTE_POINT ||
        this.shapes[i].type === DRAW_TOOL_TYPE.CHARGE_POINT ||
        this.shapes[i].type === DRAW_TOOL_TYPE.PARK_POINT
      ) {
        index++
      }
    }
    return index + 1
  }

  getAreaIndex() {
    let index = 0
    for (let i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].type === DRAW_TOOL_TYPE.AREA) {
        index++
      }
    }
    return index + 1
  }

  getBlockIndex() {
    let index = 0
    for (let i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].type === DRAW_TOOL_TYPE.BLOCK) {
        index++
      }
    }
    return index + 1
  }
}

export default new StageMobx()
