export const getMouseRealPos = (e) => {
  if (e.target.getLayer()) {
    const transform = e.target.getLayer().getAbsoluteTransform().copy()
    // to detect relative position we need to invert transform
    transform.invert()
  
    // get pointer (say mouse or touch) position
    const pos = e.target.getLayer().getStage().getPointerPosition()
  
    // now we can find relative point
    return transform.point(pos)
  }
}