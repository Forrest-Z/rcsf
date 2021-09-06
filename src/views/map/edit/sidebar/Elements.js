// React Imports
import { useState, useEffect } from 'react'

// Thrid Components
import Tree, { TreeNode } from 'rc-tree'
import {
  X,
  Search,
  CheckSquare,
  Bell,
  User,
  Trash,
  Map,
  Circle,
  Square
} from 'react-feather'
import { observer } from 'mobx-react'
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

// Mobx
import StageMobx from '../../../../utility/mobx/StageMobx'

const Elements = observer((props) => {
  // State
  const [pointTree, setPointTree] = useState([])
  const [areaTree, setAreaTree] = useState([])
  const [blockTree, setBlockTree] = useState([])

  const onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const points = []
        const areas = []
        const blocks = []

        let pointIndex = 0
        let areaIndex = 0
        let blockIndex = 0
        for (let i = 0; i < StageMobx.shapes.length; i++) {
          if (
            StageMobx.shapes[i].type === DRAW_TOOL_TYPE.ROUTE_POINT ||
            StageMobx.shapes[i].type === DRAW_TOOL_TYPE.CHARGE_POINT ||
            StageMobx.shapes[i].type === DRAW_TOOL_TYPE.PARK_POINT
          ) {
            points.push({
              key: `0-${pointIndex}`,
              title: StageMobx.shapes[i].id,
              isLeaf: true
            })
            pointIndex++
          }

          if (StageMobx.shapes[i].type === DRAW_TOOL_TYPE.AREA) {
            areas.push({
              key: `1-${areaIndex}`,
              title: StageMobx.shapes[i].id,
              isLeaf: true
            })
            areaIndex++
          }

          if (StageMobx.shapes[i].type === DRAW_TOOL_TYPE.BLOCK) {
            blocks.push({
              key: `2-${blockIndex}`,
              title: StageMobx.shapes[i].id,
              isLeaf: true
            })
            blockIndex++
          }
        }
        setAreaTree(areas)
        setPointTree(points)
        setBlockTree(blocks)

        resolve()
      }, 100)
    })
  }

  const onTreeNodeClick = (selectedKeys, info) => {
    const selection = StageMobx.shapes.find(
      (element) => element.id === info.node.title
    )
    if (selection !== undefined) {
      StageMobx.setSelection(selection)
    }
  }

  useEffect(() => {
    onLoadData()
  }, [StageMobx.shapes.length, StageMobx.shapes])

  return (
    <div className="pl-2 pt-1 h-100">
      <Tree
        showLine
        // checkable={true}
        defaultExpandAll
        onSelect={onTreeNodeClick}
      >
        <TreeNode
          title="Points"
          key="0"
          icon={
            <div className="d-flex justify-content-left align-items-center">
              <Circle className="text-success" size={15} />
            </div>
          }
        >
          {pointTree.map((item) => (
            <TreeNode
              title={item.title}
              key={item.key}
              icon={
                <Circle className="mb-50 bg-light rounded-circle" size={10} />
              }
            />
          ))}
        </TreeNode>

        <TreeNode
          title="Areas"
          key="1"
          icon={
            <div className="d-flex justify-content-left align-items-center">
              <Square className="text-success" size={15} />
            </div>
          }
        >
          {areaTree.map((item) => (
            <TreeNode
              title={item.title}
              key={item.key}
              icon={
                <Circle className="mb-50 bg-light rounded-circle" size={10} />
              }
            />
          ))}
        </TreeNode>

        <TreeNode
          title="Blocks"
          key="2"
          icon={
            <div className="d-flex justify-content-left align-items-center">
              <Square className="text-danger" size={15} />
            </div>
          }
        >
          {blockTree.map((item) => (
            <TreeNode title={item.title} key={item.key}               icon={
              <Circle className="mb-50 bg-light rounded-circle" size={10} />
            } />
          ))}
        </TreeNode>
      </Tree>
    </div>
  )
})

export default Elements
