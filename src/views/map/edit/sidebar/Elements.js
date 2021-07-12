// React Imports
import { useState, useEffect } from 'react'

// Thrid Components
import Tree, { TreeNode } from 'rc-tree'
import { X, Search, CheckSquare, Bell, User, Trash, Map, Circle, Square } from 'react-feather'
import { observer } from "mobx-react"
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

// Mobx
import StageMobx from '../../../../utility/mobx/StageMobx'
import { Stage } from 'react-konva'

const Elements = observer(props => {
  // State
  const [treeData, setTreeData] = useState([
    {
      title: 'Points',
      icon:
        <div className='d-flex justify-content-left align-items-center'>
          <Circle className='text-success' size={15} />
        </div>,
      key: '0',
      children: []
    },
    {
      title: 'Areas',
      icon:
        <div className='d-flex justify-content-left align-items-center'>
          <Square className='text-success' size={15} />
        </div>,
      key: '1',
      children: []
    },
    {
      title: 'Blocks',
      icon:
        <div className='d-flex justify-content-left align-items-center'>
          <Square className='text-danger' size={15} />
        </div>,
      key: '2',
      children: []
    }
  ])

  const [pointTree, setPointTree] = useState([])

  const onLoadData = treeNode => {
    return new Promise(resolve => {
      setTimeout(() => {
        const temp = []
        let index = 0
        for (let i = 0; i < StageMobx.shapes.length; i++) {
          if (StageMobx.shapes[i].type === DRAW_TOOL_TYPE.ROUTE_POINT ||
            StageMobx.shapes[i].type === DRAW_TOOL_TYPE.CHARGE_POINT ||
            StageMobx.shapes[i].type === DRAW_TOOL_TYPE.PARK_POINT
          ) {
            temp.push({
              key: `0-${index}`,
              title: StageMobx.shapes[i].id,
              isLeaf: true
            })
            index++
          }
        }
        setPointTree(temp)
        resolve()

      }, 100)
    })
  }

  const handleSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
    // this.selKey = info.node.props.eventKey;
  }

  const onTreeNodeClick = (selectedKeys, info) => {
    const selection = StageMobx.shapes.find(element => element.id === info.node.title) 
    StageMobx.setSelection(selection)
  }

  useEffect(() => {
    onLoadData()
  }, [StageMobx.shapes.length, StageMobx.shapes])

  return (
    <div className='pl-2 pt-1 h-100'>
      <Tree
        // showLine
        // checkable={true}
        // defaultExpandAll
        onSelect={onTreeNodeClick}
      >
        <TreeNode title='Points' key='0' icon={
          <div className='d-flex justify-content-left align-items-center'>
            <Circle className='text-success' size={15} />
          </div>
        }>
          {pointTree.map((item, index) => (
            <TreeNode title={item.title} key={item.key} />
          ))}
        </TreeNode>
      </Tree>
    </div>
  )
})

export default Elements