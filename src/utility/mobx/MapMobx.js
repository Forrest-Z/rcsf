import { makeAutoObservable } from "mobx"

class MapMobx {
  constructor() {
    makeAutoObservable(this)
  }

  /**
   * current operation map, possible values is active map or eidting map
   */
  currentMap = null

  setCurrentMap(map) {
    this.currentMap = map
  }
}

export default new MapMobx()