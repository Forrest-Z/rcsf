import { makeAutoObservable } from "mobx"

class StageMobx {

  scale = { x: 1, y: 1 }
  map = null
  data = null

  grid = true
  axis = true

  mousePosition = {}

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
}

export class ShapeMobx {
  x = 0
  y = 0
  id = ''
  name = ''
  rotation = ''
  width = 0
  height = 0
  vertices = []
  type = 0

  constructor(props) {
    makeAutoObservable(this)

    this.x = props.x
    this.y = props.y
    this.name = props.name
    this.id = Math.round(Math.random() * 10000)
    this.rotation = props.rotation
    this.vertices = props.vertices
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