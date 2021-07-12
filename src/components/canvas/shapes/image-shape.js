// https://ftp.bmp.ovh/imgs/2021/04/ac4ffed3f26ef408.png
// React Imports
import { useEffect, useRef, useState } from 'react'
// Thrid Components
import { Image } from 'react-konva'
import useImage from "use-image"
import { observer } from 'mobx-react-lite'
import Konva from 'konva'

// Mobx
import ThemeMobx from '@src/utility/mobx/ThemeMobx'

export const ImageShape = observer(({
  url,
  rotation,
  visible
}) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const imageRef = useRef()
  const [image] = useImage(url, 'Anonymous')

  useEffect(() => {
    if (image) {
      setWidth(image.width)
      setHeight(image.height)
      imageRef.current.cache()
      imageRef.current.getLayer().draw()
    }
  }, [image])


  return (
    <Image
      offsetX={width / 2}
      offsetY={height / 2}
      image={image}
      filters={ThemeMobx.skin === '"light"' ? [Konva.Filters.Invert] : []}
      ref={imageRef}
      zIndex={0}
    />
  )
})