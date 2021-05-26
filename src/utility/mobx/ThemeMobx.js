import { makeAutoObservable } from "mobx"

class ThemeMobx {
  constructor() {
    makeAutoObservable(this)
  }

  // ------------- skin ------------------
  skin = null
  
  setSkin(skin) {
    this.skin = skin
  }

  // -------------------------------------
}

export default new ThemeMobx()