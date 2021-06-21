/**
 * RCS Canvas Store
 */
import * as mobx from "mobx"

class Store {
  constructor() {
    mobx.extendObservable(this, {
      root: {
        name: '',
        width: 0,
        height: 0,
        scale: 1,
        shapes: []
      },
      get selected() {
        
      }
    })
  }

  setRoot(root) {
    this.root = root
  }
}

export default () => new Store()