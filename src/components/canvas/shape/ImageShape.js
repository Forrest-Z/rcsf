// https://ftp.bmp.ovh/imgs/2021/04/ac4ffed3f26ef408.png

import { useEffect, useRef, useState } from 'react'
import { Image } from 'react-konva'
import useImage from "use-image"
import ThemeMobx from '@src/utility/mobx/ThemeMobx'
import { observer } from 'mobx-react-lite'
import Konva from 'konva'

export const ImageShape = observer(({
  src,
  rotation,
  visible
}) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const imageRef = useRef()
  const [image] = useImage(src, 'Anonymous')

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
      filters={ThemeMobx.skin === '"dark"' ? [Konva.Filters.Invert] : []}
      ref={imageRef}
    />
  )
})