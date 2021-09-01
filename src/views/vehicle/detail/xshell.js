import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap'
import { MoreVertical, Edit, Trash, List, Move, Maximize } from 'react-feather'
// import './xshell.css'
import 'xterm/css/xterm.css'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { AttachAddon } from 'xterm-addon-attach'

const Xshell = () => {
  const [toggle, setToggle] = useState(true)
  const socketURI = 'ws://127.0.0.1:4000/terminals/832'
  let socket = ''
  const initTerm = () => {
    let term = new Terminal({
      fontSize: 14,
      cursorBlink: true
      // cursorStyle: 'underline', //光标样式
      //   cursorBlink: true, // 光标闪烁
      //   convertEol: true, //启用时，光标将设置为下一行的开头
      //   disableStdin: false, //是否应禁用输入。
      //   theme: {
      //       foreground: 'yellow', //字体
      //       background: '#060101', //背景色
      //       cursor: 'help',//设置光标
      //   }
    })
    const attachAddon = new AttachAddon(socket)
    const fitAddon = new FitAddon()
    term.loadAddon(attachAddon)
    term.loadAddon(fitAddon)
    term.open(document.getElementById('xterm'))
    fitAddon.fit()
    term.focus()
    term = term
  }

  const socketOnOpen = () => {
    socket.onopen = () => {
      // 链接成功后
      initTerm()
    }
  }
  const socketOnClose = () => {
    socket.onclose = () => {
      // console.log('close socket')
    }
  }
  const socketOnError = () => {
    socket.onerror = () => {}
  }
  const initSocket = () => {
    socket = new WebSocket(socketURI)
    socketOnClose()
    socketOnOpen()
    socketOnError()
  }

  useEffect(() => {
    initSocket()
  }, [])

  return (
    <div>
      <Card className="h-100">
        <CardHeader
          onMouseEnter={(e) => {
            setToggle(false)
          }}
          onMouseLeave={(e) => {
            setToggle(true)
          }}
        >
          <div className="d-flex align-items-center">
            <List className="mr-2" size={20} />
            <CardTitle tag="h4">Xshell Remote terminal</CardTitle>
          </div>
          <div
            className="ml-auto"
            style={{ visibility: toggle ? 'hidden' : 'visible' }}
          >
            <Button.Ripple
              size="sm"
              className="btn-icon drag-handler"
              color="flat-primary"
            >
              <Move className="cursor-move" size={16} />
            </Button.Ripple>
            <Button.Ripple size="sm" className="btn-icon" color="flat-primary">
              <Maximize size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody>
          <div id="xterm" class="xterm" />
        </CardBody>
      </Card>
    </div>
  )
}

export default Xshell
