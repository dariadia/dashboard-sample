import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

// Inspired by: https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs

type Props = {
  src: string;
  fallbackSrc: string;
} & ImageProps

export const ImageFallback = (props: Props) => {
  const {
    src,
    fallbackSrc,
    alt,
    ...rest
  } = props

  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])
  return (
    <Image
      {...rest}
      alt={alt ?? 'decoration'}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
