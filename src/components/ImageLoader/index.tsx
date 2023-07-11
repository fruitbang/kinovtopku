import useFetchImage from '../../app/api/moviesSlice/useFetchImage'

const ImageLoader = ({
  id,
  imgDirectory,
}: {
  id: string
  imgDirectory: string
}) => {
  const image = useFetchImage({ imageId: id, imgDirectory })

  return (
    <img
      src={image}
      className='aspect-square object-scale-down'
      alt={`image${id}`}
    />
  )
}

export default ImageLoader
