import { useRef, useState } from 'react'
// React Imports
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'
import { observer } from "mobx-react"

// Custom Components
import { PointShape, PolygonShape } from '../shapes'
import { DRAW_TOOL_TYPE } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const ShapeLayer = observer(props => {
  const { visible } = props

  const GUIDELINE_OFFSET = 5

  // ** Ref
  const layerRef = useRef()

  const getLineGuideStops = (skipShape) => {
    const stage = layerRef.current.getStage()

    const vertical = [0, stage.width() / 2, stage.width()]
    const horizontal = [0, stage.height() / 2, stage.height()]

    // and we snap over edges and center of each object on the canvas
    stage.find('.object').forEach((guideItem) => {
      if (guideItem === skipShape) {
        return
      }
      const box = guideItem.getClientRect()
      // and we can snap to all edges of shapes
      vertical.push([box.x, box.x + box.width, box.x + (box.width / 2)])
      horizontal.push([box.y, box.y + box.height, box.y + (box.height / 2)])
    })

    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat()
    }
  }

  const getObjectSnappingEdges = (node) => {
    const box = node.getClientRect()
    const absPos = node.absolutePosition()

    return {
      vertical: [
        {
          guide: Math.round(box.x),
          offset: Math.round(absPos.x - box.x),
          snap: 'start'
        },
        {
          guide: Math.round(box.x + (box.width / 2)),
          offset: Math.round(absPos.x - box.x - (box.width / 2)),
          snap: 'center'
        },
        {
          guide: Math.round(box.x + box.width),
          offset: Math.round(absPos.x - box.x - box.width),
          snap: 'end'
        }
      ],
      horizontal: [
        {
          guide: Math.round(box.y),
          offset: Math.round(absPos.y - box.y),
          snap: 'start'
        },
        {
          guide: Math.round(box.y + (box.height / 2)),
          offset: Math.round(absPos.y - box.y - (box.height / 2)),
          snap: 'center'
        },
        {
          guide: Math.round(box.y + box.height),
          offset: Math.round(absPos.y - box.y - box.height),
          snap: 'end'
        }
      ]
    }
  }

  const getGuides = (lineGuideStops, itemBounds) => {
    const resultV = []
    const resultH = []

    lineGuideStops.vertical.forEach((lineGuide) => {
      itemBounds.vertical.forEach((itemBound) => {
        const diff = Math.abs(lineGuide - itemBound.guide)
        // if the distance between guild line and object snap point is close we can consider this for snapping
        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide,
            diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          })
        }
      })
    })

    lineGuideStops.horizontal.forEach((lineGuide) => {
      itemBounds.horizontal.forEach((itemBound) => {
        const diff = Math.abs(lineGuide - itemBound.guide)
        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide,
            diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          })
        }
      })
    })

    const guides = []

    // find closest snap
    const minV = resultV.sort((a, b) => a.diff - b.diff)[0]
    const minH = resultH.sort((a, b) => a.diff - b.diff)[0]
    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: 'V',
        snap: minV.snap
      })
    }
    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: 'H',
        snap: minH.snap
      })
    }
    return guides
  }

  const drawGuides = (guides) => {
    const layer = layerRef.current
    guides.forEach((lg) => {
      if (lg.orientation === 'H') {
        const line = new Konva.Line({
          points: [-6000, 0, 6000, 0],
          stroke: 'rgb(0, 161, 255)',
          strokeWidth: 1,
          name: 'guid-line',
          dash: [4, 6],
          strokeScaleEnabled: false
        })
        layer.add(line)
        line.absolutePosition({
          x: 0,
          y: lg.lineGuide
        })
      } else if (lg.orientation === 'V') {
        const line = new Konva.Line({
          points: [0, -6000, 0, 6000],
          stroke: 'rgb(0, 161, 255)',
          strokeWidth: 1,
          name: 'guid-line',
          dash: [4, 6],
          strokeScaleEnabled: false
        })
        layer.add(line)
        line.absolutePosition({
          x: lg.lineGuide,
          y: 0
        })
      }
    })
  }

  const handleDragMove = (e) => {
    if (e.target.className === 'Transformer') {
      return
    }
    
    console.log(e)

    // clear all previous lines on the screen
    layerRef.current.find('.guid-line').forEach((l) => l.destroy())

    // find possible snapping lines
    const lineGuideStops = getLineGuideStops(e.target)
    // find snapping points of current object
    const itemBounds = getObjectSnappingEdges(e.target)

    // now find where can we snap current object
    const guides = getGuides(lineGuideStops, itemBounds)

    // do nothing of no snapping
    if (!guides.length) {
      return
    }

    drawGuides(guides)

    const absPos = e.target.absolutePosition()
    // now force object position
    guides.forEach((lg) => {
      switch (lg.snap) {
        case 'start': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset
              break
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset
              break
            }
          }
          break
        }
        case 'center': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset
              break
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset
              break
            }
          }
          break
        }
        case 'end': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset
              break
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset
              break
            }
          }
          break
        }
      }
    })
    e.target.absolutePosition(absPos)
  }

  const handleDragEnd = () => {
    // clear all previous lines on the screen
    layerRef.current.find('.guid-line').forEach((l) => l.destroy())
  }

  return (
    <Layer
      visible={visible}
      ref={layerRef}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
    >
      {
        StageMobx.shapes.map((item, key) => {
          switch (item.type) {
            case DRAW_TOOL_TYPE.ROUTE_POINT: case DRAW_TOOL_TYPE.CHARGE_POINT: case DRAW_TOOL_TYPE.PARK_POINT:
              return (
                <PointShape
                  data={item}
                  key={key}
                />
              )
            case DRAW_TOOL_TYPE.AREA:
            case DRAW_TOOL_TYPE.BLOCK:
              return (
                <PolygonShape
                  data={item}
                  key={key}
                />
              )
          }
        })
      }
    </Layer>
  )
})

ShapeLayer.propTypes = {
  visible: PropTypes.bool
}