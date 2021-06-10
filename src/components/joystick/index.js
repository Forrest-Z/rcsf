import { useState, useEffect } from 'react'
import ReactNipple from 'react-nipple'

const Joystick = ({ onMove, onEnd }) => {
  const [firstPosition, setFirstPosition] = useState()

  useEffect(() => {
    const nipple = document.getElementsByClassName('nipple')[0]
    nipple.style.opacity = 0.8

    const back = document.getElementsByClassName('back')[0]
    back.style.display = 'flex'
    back.style.height = '180px'
    back.style.width = '180px'
    back.style.justifyContent = 'center'
    back.style.alignItems = 'center'
    back.style.marginLeft = '0px'
    back.style.marginTop = '-70px'
    back.style.left = 'calc(50% - 90px)'
    back.style.backgroundImage = 'linear-gradient(0deg, #FEED07 0%, #FE6A50 5%, #ED00AA 15%, #2FE3FE 50%, #8900FF 100%)'

    const front = document.getElementsByClassName('front')[0]
    front.style.width = '30px'
    front.style.height = '30px'
    front.style.marginTop = '5px'
    front.style.marginLeft = '-15px'

    const inner = document.createElement('div')
    inner.style.height = '165px'
    inner.style.width = '165px'
    inner.style.left = 'calc(50% - 75px)'
    inner.style.backgroundImage = 'linear-gradient(0deg, #283046, #283046)'
    inner.style.borderRadius = '50%'

    back.appendChild(inner)
    window.dispatchEvent(new Event("resize"))
  }, [])

  return (
    <ReactNipple
      className='h-100'
      options={{
        mode: 'static',
        position: {
          top: '50%',
          left: '50%'
        }
      }}
      threshold={0.5}
      onMove={(evt, data) => onMove(evt, data)}
      onStart={(evt, data) => {
        setFirstPosition(data.position)
      }}
      onEnd={(evt, data) => onEnd(evt, data)}
    />
  )
}

export default Joystick