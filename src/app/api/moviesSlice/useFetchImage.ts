import { useEffect, useState } from 'react'

const useFetchImage = ({
  imageId,
  imgDirectory,
}: {
  imageId: string | number
  imgDirectory: string
}) => {
  const [img, setImg] = useState<string>()

  const fetchImage = async () => {
    const res = await fetch(`/movies/${imgDirectory}/${imageId}`)
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob)
    setImg(imageObjectURL)
  }

  useEffect(() => {
    if (imageId && imgDirectory) {
      fetchImage()
    }
  }, [])

  return img
}

export default useFetchImage
