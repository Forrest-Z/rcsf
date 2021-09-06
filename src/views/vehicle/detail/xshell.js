import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap'
import { MoreVertical, Edit, Trash, List, Move, Maximize } from 'react-feather'
import './xshell.css'
// import 'xterm/css/xterm.css'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { AttachAddon } from 'xterm-addon-attach'
import axios from 'axios'

const Xshell = () => {
  const [toggle, setToggle] = useState(true)
  let socketURI = 'ws://127.0.0.1:4000/terminals/12528'

  let socket = ''
  const initTerm = () => {
    const term = new Terminal({
      // fontSize: 13,
      cursorBlink: true,
      fontWeight: 400,
      fontSize: 15,
      rows: 27
      // cols: 400
      // cursorBlink: true
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
    term.open(document.getElementById('xterm'))
    // term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
    // let term = new Terminal({
    //   fontSize: 14,

    // })
    const attachAddon = new AttachAddon(socket) // 引入这个会导致滚动条到最底部
    const fitAddon = new FitAddon()
    term.loadAddon(attachAddon)
    term.loadAddon(fitAddon)
    // term.open(document.getElementById('xterm'))
    fitAddon.fit()
    // term.prompt = () => {
    //   term.write('15151548515 ')
    // }
    // term.focus()
    // term = term
  }

  const socketOnOpen = () => {
    socket.onopen = (e) => {
      console.log(e)
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
    socket.onerror = (e) => {

    }
  }
  const initSocket = () => {
    socket = new WebSocket(socketURI)
    socketOnClose()
    socketOnOpen()
    socketOnError()
  }

  useEffect(() => {
    axios
      .post('http://127.0.0.1:4000/terminals')
      .then((res) => {
        // 获取分配的pid
        console.log(res.data)
        socketURI = `ws://127.0.0.1:4000/terminals/${res.data}`
        console.log(socketURI)
        initSocket()
        console.log(document.getElementById('xterm').scrollHeight)
      })
      .catch((e) => {
        document.getElementById(
          'xterm'
        ).innerHTML = `<h3 class='text-center'>websocket连接失败，请检查后重试……</h3>`
      })
  }, [])

  return (
    <div className="h-100">
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
          <div  id="xterm" className="xterm h-100" />
        </CardBody>
      </Card>
    </div>
  )
}

export default Xshell
