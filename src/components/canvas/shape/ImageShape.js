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
  const imageRef = useRef()
  const [image] = useImage(src, 'Anonymous')

  useEffect(() => {
    if (image) {
      imageRef.current.cache()
      imageRef.current.getLayer().draw()
    }
  }, [image])


  return (
    <Image
      image={image}
      filters={ThemeMobx.skin === '"dark"' ? [Konva.Filters.Invert] : []}
      ref={imageRef}
    />
  )
})